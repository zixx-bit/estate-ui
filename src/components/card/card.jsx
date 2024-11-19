import { Link } from "react-router-dom";
import "./card.scss";

function Card({property}){
  return (
    <div className="card">
    <Link to={ `/${property.id}` } className="imageContainer">
      <img src={property.images} alt=""/>
      </Link>
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
              <div className="icon">
                <img src="/save.png" alt=""></img>
              </div> 
              <div className="icon">
                <img src="/chat.png" alt=""></img>
              </div>           
              </div>                        

            </div>

          </div>

      </div>
  
  )
}

export default Card