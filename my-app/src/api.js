export function fetchhotels(query) {
  let url = "http://alphahotelapi.herokuapp.com/admin";
  console.log(url);
  return fetch(url)
    .then(res => res.json())
    .then(result => result);
}



