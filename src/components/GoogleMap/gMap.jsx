import React, { useState } from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "./Gmap.scss"
import GooglePin from '../Googlepin/GooglePin';

function Gmap({data}){
  const [selected, setSelected] = useState(null);
  const defaultCenter= {  lat:  51.5074, lng: -0.1278  }

  return (
    <div className='map'>
  <APIProvider apiKey="AIzaSyDiq9VCzV0okX2lQhvEsMLUTC92-thsQ48" >
    <Map
       defaultZoom={6}
       defaultCenter={defaultCenter}
       mapId='DEMO_MAP_ID'
       onClick={() => setSelected(defaultCenter)}
      gestureHandling={'greedy'}
      // disableDefaultUI={true}
    />
    
   
    <GooglePin  data={data} />
    </APIProvider>

  </div>

  )
}

export default Gmap