import Slider from "../../components/Slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";

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
      <div className="wrapper"></div>

      </div>
    </div>
  )
}

export default singlePage