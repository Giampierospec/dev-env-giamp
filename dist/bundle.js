!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){(function(t){"use strict";var e=r(2);(0,e.getUsers)().then(function(r){var n="";r.forEach(function(t){n+='<tr>\n             <td><a href="#" data-id="'+t.id+'" class="deleteUser">Delete</a></td>\n             <td>'+t.id+"</td>\n             <td>"+t.firstName+"</td>\n             <td>"+t.lastName+"</td>\n             <td>"+t.email+"</td>\n             </tr>"}),t.document.getElementById("users").innerHTML=n;var o=t.document.getElementsByClassName("deleteUser");Array.from(o,function(t){t.onclick=function(t){var r=t.target;t.preventDefault(),(0,e.deleteUser)(r.attributes["data-id"].value);var n=r.parentNode.parentNode;n.parentNode.removeChild(n)}})})}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(){return i("users")}function s(t){return a("users/"+t)}function i(t){return fetch(c+t).then(u,d)}function a(t){var e=new Request(c+t,{method:"DELETE"});return fetch(e).then(u,d)}function u(t){return t.json()}function d(t){console.log(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.getUsers=o,e.deleteUser=s,r(3);var h=r(4),f=n(h),c=(0,f["default"])()},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return y.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function i(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader;return e.readAsArrayBuffer(t),i(e)}function u(t){var e=new FileReader;return e.readAsText(t),i(e)}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(y.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(y.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(t){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=s(this);return t?t:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(c)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return m.indexOf(e)>-1?e:t}function f(t,e){e=e||{};var r=e.body;if(f.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function c(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function l(t){var e=new o,r=(t.getAllResponseHeaders()||"").trim().split("\n");return r.forEach(function(t){var r=t.trim().split(":"),n=r.shift().trim(),o=r.join(":").trim();e.append(n,o)}),e}function p(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof o?e.headers:new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var y={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];o||(o=[],this.map[t]=o),o.push(n)},o.prototype["delete"]=function(t){delete this.map[e(t)]},o.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},o.prototype.getAll=function(t){return this.map[e(t)]||[]},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=[r(n)]},o.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this)},d.call(f.prototype),d.call(p.prototype),p.prototype.clone=function(){return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},p.error=function(){var t=new p(null,{status:0,statusText:""});return t.type="error",t};var b=[301,302,303,307,308];p.redirect=function(t,e){if(b.indexOf(e)===-1)throw new RangeError("Invalid status code");return new p(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=f,t.Response=p,t.fetch=function(t,e){return new Promise(function(r,n){function o(){return"responseURL"in i?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):void 0}var s;s=f.prototype.isPrototypeOf(t)&&!e?t:new f(t,e);var i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:l(i),url:o()},e="response"in i?i.response:i.responseText;r(new p(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(s.method,s.url,!0),"include"===s.credentials&&(i.withCredentials=!0),"responseType"in i&&y.blob&&(i.responseType="blob"),s.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof s._bodyInit?null:s._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,e){"use strict";function r(){return n("useMockApi")?"http://localhost:3001":""}function n(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),n=r.exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g,"")):"":null}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r}]);
//# sourceMappingURL=bundle.js.map