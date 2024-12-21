import React, { useState } from 'react'
import "./slider.scss";

const Slider = ({images}) => {
  const[imageIndex, setImageIndex] = useState (null)
  return (
     <div className='slider'>
    {imageIndex !==null && ( 
    <div className='fullSlider'>
      <div className='arrow'><img src='/arrow.png'></img></div>
      <div className='imgContainer'><img src={images[0]}></img></div>
      <div className='arrow'> <img src='/arrow.png' className='rightArrow'></img></div>
      <div className='close' onClick={() => setImageIndex(null) }>X</div>
    </div>
  )}
    <div className='bigImage'>
      <img src={images[0]} alt='' onClick={() => setImageIndex(2) }/>
    </div>
    <div className='smallImages'>
      {images.slice(1).map((image, index)=>(<img src={image} alt='' key={index}/>)) }
    </div>  
  </div>
  )
}

export default Slider;