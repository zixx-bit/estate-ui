import Slider from "../../components/Slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map"
import Gmap from "../../components/GoogleMap/Gmap"


function singlePage() {
  return (
    <div className="singlePage">
      <div className="details">
      <div className="wrapper"><Slider images={singlePostData.images}/>
      <div className="info">
        <div className="top">
          <div className="post">
            <h1>{singlePostData.title}</h1>
              <div className="address">
                <img src="/pin.png" alt=""/><span className="text-3xl font-bold underline">{singlePostData.address}</span>
              </div>
              <div className="price">Ksh {singlePostData.price}</div>
            </div>
          <div className="user">
            <img src={userData.img}></img>
            <div className="name">{userData.name}</div>
          </div>
        </div>
        <div className="bottom">{singlePostData.description}</div>
      </div>
      </div>
      </div>
      {/* features section */}
      <div className="features">
      <div className="wrapper">
        <p className="title">General</p>
        <div className="listVertical">
          <div className="feature">
          <img src="/utility.png"/>
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
          </div>
          <div className="feature">
          <img src="/pet.png"/>
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
          </div>
          <div className="feature">
          <img src="/fee.png"/>
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
          </div>
        </div>
        {/* sizes */}
        <p className="title">Sizes</p>        
        <div className="sizes">
          <div className="size">
          <img src="/size.png" alt=""/> 
          <span>80sqft</span>         
          </div>
          <div className="size">
            <img src="/bed.png"/>
            <span>2 beds</span>            
          </div>
          <div className="size">
          <img src="/bath.png"/>
          <span>1 bathroom</span>
          </div>
        </div>
        {/* Nearby places */}
        <p className="title">Nearby places</p>
        <div className="listHorizontal">          
            <div className="feature">
            <img src="/school.png"/>
              <div className="featureText">
                <span>School:</span>
                <p>250m away</p>
              </div>            
            </div>
            <div className="feature">
            <img src="/bus.png" alt=""/>
            <div className="featureText">
              <span>Bus Stop:</span>
              <p>250m away</p>
            </div>
            </div>
            <div className="feature">
            <img src="restaurant.png" alt=""/>
            <div className="featureText">
              <span>Restaurant:</span>
              <p>200m away</p>
            </div>
            </div>          
        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
          <Map propertyData={[singlePostData]}/>
        </div>
        <div className="buttons">
          <button className="firstButton">
            <img src="/chat.png"/>
            Send a message
          </button>
          <button className="secondButton">
            <img src="/save.png"/>
            Save place
          </button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default singlePage