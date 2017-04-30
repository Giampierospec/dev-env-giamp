//imports the path
import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from  "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";
//default object for webpack config
export default {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index")
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    //Generate an external css file with a hash in the filename
    new ExtractTextPlugin("[name].[contenthash].css"),
    //Hash the files using MD5 so that their name changes when their content chanes
    new WebpackMd5Hash(),
    //Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    //Create HTML file that includes reference to bundled js

    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      //Porperties you define here are available in index.html
      //unsing htmlWebpackPlugin.options.varname
      trackJSToken: "09ed5b0a03484223be128e4d53d7b84a"
    }),
    //Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.optimize.UglifyJsPlugin()

  ],
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/, loaders: ["babel"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css?sourceMap")
      }
    ]
  }
}
