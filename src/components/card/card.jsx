import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { singlePostData } from '../../lib/dummydata';

import "./card.scss";

function Card({property}){
  console.log(property)
  return (
    <div className="card">
    <div className="imageContainer">
    <Link to={ `/${property.id}` } >
     <img src={property.images[0]} alt=""/>      
      </Link>
      </div>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${property.id}`}>{property.title}</Link>
        </h2>

        <p className="address">
          <img src="/pin.png" alt=""></img>
           <span>{property.address}</span> 
        </p>

        <p className="price">Ksh {property.price}/month</p>

          <div className="bottom">
            <div className="features">

              <div className="feature">
              <img src="/bed.png" alt=""></img>
              <span>{property.bedroom} bedroom</span>
              </div>
             
              <div className="feature">
              <img src="/bath.png" alt=""></img>
              <span>{property.bathroom} bathroom</span>
              </div>
             </div>

              <div className="icons">
                <div className="icon save">
                  <img src="/save.png" alt="save place"></img>
                </div> 
                <div className="icon chat" >
                  <img src="/speech_bubble.gif" alt=""></img>
                </div>           
              </div>                        
              
            </div>
          </div>
      </div>
  
  )
}

export default Card