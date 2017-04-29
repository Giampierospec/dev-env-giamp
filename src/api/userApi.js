import "whatwg-fetch"
import getBaseUrl from "./baseUrl";
const baseUrl = getBaseUrl();
//Exporting get users so i can use it later
export function getUsers() {
  return get("users");
}
export function deleteUser(id) {
  return del(`users/${id}`);
}
//gets the users
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);

}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: "DELETE"
  });

  return fetch(request).then(onSuccess, onError);
}


//If it succeeds
function onSuccess(response) {
  return response.json();
}
//If it causes errors.
function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
