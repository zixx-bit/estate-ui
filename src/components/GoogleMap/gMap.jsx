import React, { useState } from 'react';
import dotenv from 'dotenv';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "./Gmap.scss"
import GooglePin from '../Googlepin/GooglePin';
dotenv.config()


function Gmap({data}){
  const [selected, setSelected] = useState(null);
  const defaultCenter= {  lat:  52.4797, lng: -1.90269  }
  const gKey = process.env.GOOGLE_MAPS_API_KEY
  // const Key = process.env.GOOGLE_MAPS_API_KEY

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