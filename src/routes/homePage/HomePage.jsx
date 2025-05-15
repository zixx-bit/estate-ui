import React, { useContext } from 'react';
import "./homePage.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => { 
  
  const {currentUser} = useContext(AuthContext);
 console.log(currentUser)
  return (
    <div className='homePage'>
    <div className='textContainer'>
        <div className='wrapper'>
        <h1 className='title'>Find real estate and Get your Dream place</h1>
        <p>A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met
          in the viewport - then it "sticks" in place (like position:fixed)</p>
        <SearchBar/>
        <div className='boxes'>
        <div className='box'>
        <h1>16+</h1>
        <h2>years of experience</h2>
        </div>
        <div className='box'>
        <h1>200</h1>
        <h2>Award Gained</h2>
        </div>
        <div className='box'>
        <h1>2000+</h1>
        <h2>Peoperty ready</h2>
        </div>
        </div>
        </div>
    </div>
    <div className='imgContainer'>
        <img src='/bg.png' alt=''/>
    </div>
    </div>
  )
}

export default HomePage