import React, { useState } from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "./Gmap.scss"
import GooglePin from '../Googlepin/GooglePin';

function Gmap({data}){
  const [selected, setSelected] = useState(null);
  const defaultCenter= {lat:  52.4797, lng: -1.90269}
  const gKey = "AIzaSyDiq9VCzV0okX2lQhvEsMLUTC92-thsQ48";

  return (
    <div className='map'>
  <APIProvider apiKey={gKey}>
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