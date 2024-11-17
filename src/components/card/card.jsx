import { Link } from "react-router-dom";
import "./card.scss";

function Card({ property }){
  return (
    <div className="card">Card
    <Link to={ `/${property.id}` } className="imageContainer">
      <img src={property.img} alt=""/>
      </Link>
      <div className="textContainer"></div>
    </div>
  )
}

export default Card