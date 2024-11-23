import { useState, useEffect, useRef, useCallback } from 'react';


import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
// import {MarkerClusterer} from '@googlemaps/markerclusterer';
// import  {Marker} from '@googlemaps/markerclusterer';
import { useMap } from 'react-leaflet';


const GooglePin = ({data}) => {
  // const map = useMap
  // const [markers, setMarkers] =useState<{[key : string] : Marker}>({}) 
  // const clusterer =useRef<>
  return (
    <div>
      {data.map(location => (
        <AdvancedMarker
          key={location.id}
          position={ {lat: location.latitude, lng:location.longitude}}>
        <Pin background={'#E0115F '} glyphColor={'#fff'} borderColor={'#fff'} />
        </AdvancedMarker>
      ))}
</div>
  )
}

export default GooglePin
