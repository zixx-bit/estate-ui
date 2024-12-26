import Slider from "../../components/Slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map"
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
                <img src="/pin.png" alt=""/><span>{singlePostData.address}</span>
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
      <div className="features">
      <div className="wrapper">
        <p className="title">General</p>
        <div className="listVertical"></div>
        <p className="title">Sizes</p>
        <div className="sizes"></div>
        <p className="title">Nearby places</p>
        <div className="listHorizontal"></div>
        <p className="title">Location</p>
        {/* <div className="mapContainer"><Map items ={[singlePostData.latitude, singlePostData.longitude ]}/></div> */}
        <div className="buttons">
          <button>
            <img src="/chat.png"/>
            Send a message
          </button>
          <button>
            <img src="/save.png"/>
            Save the place
          </button>
        </div>



      </div>

      </div>
    </div>
  )
}

export default singlePage