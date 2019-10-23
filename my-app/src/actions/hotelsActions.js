export function fetchingHotels() {
  console.log("action: FETCHING_HOTELS");
  return {
    type: "FETCHING_HOTELS"
  };
}

export function retrievedHotels(result) {
  console.log("action: RETRIEVED_HOTELS");
  return {
    type: "RETRIEVED_HOTELS",
    hotelsList: result
  };
}

export function deleteHotels(id) {
  console.log("action: DELETE_HOTELS");
  return {
    type: "DELETE_HOTELS",
    id: id
  };
}