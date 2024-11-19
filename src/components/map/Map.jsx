import "./map.scss";
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[51.5074, -0.1278]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.5074, -0.1278]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map