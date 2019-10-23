import React from "react";
import { fetchingHotels, retrievedHotels } from "../actions/hotelsActions";
import { fetchhotels } from "../api";
import SearchResults from "./SearchResults";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    this.props.getHotels();
  }

  render() {
    return (
      <main>
        <div className="jumbotron">
          <div className="container">
            <img
              width="50%"
              height="70%"
              src="https://image.flaticon.com/icons/png/512/38/38363.png"
              alt=""
            />
            <br />
            <br />
            <h3 className="lead">
              <strong>List Of Hotels</strong>
            </h3>
          </div>
        </div>
        <SearchResults />
      </main>
    );
  }
}

function mapActionToProps(dispatch) {
  return {
    getHotels: function() {
      dispatch(fetchingHotels());
      fetchhotels(null).then(result => dispatch(retrievedHotels(result)));
    }
  };
}

export default connect(
  null,
  mapActionToProps
)(Home);

