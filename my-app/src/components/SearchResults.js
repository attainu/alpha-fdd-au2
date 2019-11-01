import React from "react";
import { connect } from "react-redux";
import { deleteHotels } from "../actions/hotelsActions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class SearchResults extends React.Component {
  render() {
    console.log(this.props);
      return (
       <div className="container" >
        {this.props.hotelsList ? (
          <ul className="card text-left" style={{padding:"9px"}}>
            {this.props.hotelsList.map((item, i) => (
              <li key={i.toString()} className="card">
                <div className="card-body"  key={item._id}>
                    <h5 className="card-title"  style={{textAlign: "center"}}>{item.hotel_name}</h5> 
                 </div>
                  <Carousel  showArrows={true}>
                      <div className="carousel-item active" >
                        <img className="d-block w-100" src={item.image_url.pic_1} />
                      </div>
                      <div>
                        <img className="d-block w-100" src={item.image_url.profile_pic} />
                      </div>
                      <div>
                        <img className="d-block w-100" src={item.image_url.pic_2} />
                      </div>
                  </Carousel>
              
                   <div className="hotel-address icon-location">
                      <div className="street-block">
                         <div className="thoroughfare"  style={{display:"inline",padding: "5px"}} >City:-{item.location}</div>
                         </div>
                          <p className="icon-phone" style={{display:"inline",padding: "5px"}} >Contact:-{item.contact}</p>
                          <div className="hotel-card__description">
                            <small style={{display:"flex",padding: "5px",borderTop:"1px solid",borderBottom:"1px solid",flexFlow:"column wrap",justifyContent:"flex-end"}}>{item.info}</small>
                          </div>
                          <div>  
                            <span  style={{display:"inline",padding: "5px"}} className="text">Rating:-"{item.stars}" Star </span></div>
                          </div> <br/>
                          <div className="row">
                             <div className="col-sm-6">
                                <div className="card">
                                   <div className="card-body" style={{backgroundColor:"#FFF8DC"}}>
                                          <h5 className="card-title">PRICE</h5>
                                              <p className="card-text" style={{display:"table",padding: "5px"}}>
                                                      <br />
                                                       <span  style={{display:"inline-block",padding: "5px"}} className="text"> Single Room:-Rs."{item.price.single_room}",</span>
                                                       <span  style={{display:"inline-block",padding: "5px"}} className="text"> Double Room:-Rs."{item.price.double_room}",</span>
                                                       <span  style={{display:"inline-block",padding: "5px"}} className="text"> Suite:-Rs."{item.price.suite}"</span>
                                              </p>
       
                                     </div>
                                 </div>
                               </div>
                               <div className="col-sm-6">
                                  <div className="card">
                                     <div className="card-body" style={{backgroundColor:"#FFF8DC"}}>
                                         <h5 className="card-title">AMENITIES</h5>
                                            <p className="card-text" style={{display:"table",padding: "5px"}}>
                                                <span  style={{display:"inline-block",padding: "5px"}}   className="text">Wifi- {item.amenities.wifi? <i className="fa fa-wifi" aria-hidden="true"></i> : <i class="fa fa-wifi" aria-hidden="true"></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Pool- {item.amenities.pool? <i className="fa fa-swimming-pool"></i> : <i className="fa fa-swimming-pool" style={{color:"grey"}}></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Spa- {item.amenities.spa? <i className="fas fa-spa"></i> : <i className="fas fa-spa" style={{color:"grey"}}></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Parking- {item.amenities.parking? <i className="fas fa-parking"></i> : <i className="fas fa-parking" style={{color:"grey"}}></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Pets- {item.amenities.pets? <i className="fas fa-dog"></i> : <i className="fas fa-dog" style={{color:"grey"}}></i> }</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Restaurant- {item.amenities.restaurant? <i className="fas fa-concierge-bell"></i> : <i className="fas fa-concierge-bell" style={{color:"grey"}} ></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Bar- {item.amenities.bar? <i className="fas fa-glass-martini-alt"></i>: <i className="fas fa-glass-martini-alt" style={{color:"grey"}}></i>}</span>
                                                <span  style={{display:"inline-block",padding: "5px"}} className="text">Gym- {item.amenities.gym?  <i className="fas fa-dumbbell"></i>: <i className="fas fa-dumbbell" style={{color:"grey"}}></i>}</span>
                                             </p>
                                       </div>
                                   </div>
                                 </div>
                             </div>
                             <div style={{textAlign: "center"}}>
                             <button onClick={this.props.delete}
                                      className="btn btn-danger"
                                       >
                                                Delete
                              </button>
                             </div>
                            
               </li>
            ))}
           </ul>
        ) : (
          "Searching..."
        )}
       </div>
     
    );
  }
}

function mapActionToProps(dispatch) {
  
  return {
    delete: function(e) {
      const id =  e.target.previousSibling;
           if (window.confirm("Are you sure?")) {
             console.log("DELETED");
             dispatch(deleteHotels(id));
            fetch("http://alphahotelapi.herokuapp.com/admin/hotel/del/:id")
          .then(res => res.json())
          .then(res => console.log(res));
    }
  }
}
}

function mapStateToProps(state) {
  console.log("SearchResults ==> mapStateToProps");
  return { 
    hotelsList: state.hotelsReducer.hotelsList,
    hotels: state.hotelsReducer.hotelsList
  
  };
}
export default connect(mapStateToProps,mapActionToProps)(SearchResults);
