import { Marker, Popup } from "react-leaflet"
import "./pin.scss"
import { Link } from "react-router-dom"

function Pin ({propertyItem}) {
  return (        
    <Marker position={[propertyItem.latitude, propertyItem.longitude]}>
      <Popup>
        <div className="popupContainer">
        <Link to={`/${propertyItem.id}`}>
          <img src={propertyItem.images}/>
          </Link>
          <div className="textContainer">
            <Link to={`/${propertyItem.id}`}>{propertyItem.title}</Link>
            <span className="bed">{propertyItem.bedroom} bedroom</span>
            <b>Ksh {propertyItem.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin