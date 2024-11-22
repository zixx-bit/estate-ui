import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import React from 'react'

const GooglePin = ({data}) => {
  return (
    <div>
      {data.map(location => (
        <AdvancedMarker
          key={location.id}
          position={ {lat: location.latitude, lng:location.longitude}}>
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
</div>
  )
}

export default GooglePin
