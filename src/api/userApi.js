import "whatwg-fetch"
//Exporting get users so i can use it later
export function getUsers() {
  return get("users");
}
//gets the users
function get(url) {
  return fetch(url).then(onSuccess, onError);
}
//If it succeeds
function onSuccess(response) {
  return response.json();
}
//If it causes errors.
function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
