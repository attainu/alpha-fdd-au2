function hotelsReducer(state = { hotelsList: [] }, action) {
  console.log("hotelsReducer()");

  switch (action.type) {
    case "FETCHING_HOTELS":
      return Object.assign({}, state, { hotelsList: null });

    case "RETRIEVED_HOTELS":
      return Object.assign({}, state, { hotelsList: action.hotelsList });


      case "DELETE_HOTELS":
        
          return Object.assign({}, state, { hotelsList:  state.hotelsList.filter(hotelsList => hotelsList._id !== action.id)});

    default:
      return state;
  }
}

export default hotelsReducer;
