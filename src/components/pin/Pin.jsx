import { Marker, Popup } from "react-leaflet"
import "./pin.scss"
import { Link } from "react-router-dom"

const Pin = (location) => {
  return (        
    <Marker position={[location.latitude, location.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img ></img>
          <div className="textContainer">
            <Link to={`/${location.id}`}>{location.title}</Link>
            <span className="bed">{location.bedroom}</span>
            <b>Ksh{location.price}</b>
          </div>

        </div>
      </Popup>
    </Marker>
  )
}

export default Pin