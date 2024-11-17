import { Link } from "react-router-dom";
import "./card.scss";

function Card({property}){
  return (
    <div className="card">
    <Link to={ `/${property.id}` } className="imageContainer">
      <img src={property.images} alt=""/>
      </Link>
      <div className="textContainer"></div>
    </div>
  )
}

export default Card