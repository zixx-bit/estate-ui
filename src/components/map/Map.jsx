
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Pin from "../pin/Pin.jsx";

function Map({propertyData}){
  return (
    <MapContainer center={propertyData.length === 1 ? [propertyData[0].latitude, propertyData[0].longitude]: [51.5074, -0.1278]} zoom={6} scrollWheelZoom={true} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {propertyData.map(propertyItem => (
      <Pin propertyItem={propertyItem} key={propertyItem.id}/>
    ))}    
  </MapContainer>
  )
}

export default Map