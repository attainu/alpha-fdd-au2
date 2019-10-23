export function fetchhotels(query) {
  let url = "http://alphahotelapi.herokuapp.com/admin";
  console.log(url);
  return fetch(url)
    .then(res => res.json())
    .then(result => result);
}

export function deletedHotels(item) {
  let url = "http://alphahotelapi.herokuapp.com/admin/hotel/del/:id";
  console.log(url);
  return fetch(url, {
    method: "DELETE"
  }).then(response => response.json());
}

