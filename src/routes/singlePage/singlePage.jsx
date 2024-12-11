import Slider from "../../components/Slider/Slider";
import "./singlePage.scss";
import { singlePostData } from "../../lib/dummydata";

function singlePage() {
  return (
    <div className="singlePage">
      <div className="details">
      <div className="wrapper"><Slider images={singlePostData.images}/>
      <div className="info">
        <div className="top">
          <div className="post">
            <h1>{singlePostData.title}</h1>
          </div>
          <div className="user"></div>
        </div>
        <div className="bottom"></div>
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