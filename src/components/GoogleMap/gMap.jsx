import React from 'react'
import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps';
import "./Gmap.scss"
import GooglePin from '../Googlepin/GooglePin';

function Gmap({data}){
  return (
    <div className='map'>
  <APIProvider apiKey="AIzaSyDiq9VCzV0okX2lQhvEsMLUTC92-thsQ48" >
    <Map
       defaultZoom={7}
       defaultCenter={ { lat:  51.5074, lng: -0.1278 } }
       mapId='DEMO_MAP_ID'

    //   defaultZoom={3}
      gestureHandling={'greedy'}
    //   disableDefaultUI={true}
    />
   
    <GooglePin  data={data} />
    </APIProvider>

  </div>

  )
}

export default Gmap