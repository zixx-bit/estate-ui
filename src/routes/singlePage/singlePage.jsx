import Slider from "../../components/Slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map"
import Gmap from "../../components/GoogleMap/Gmap"
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";


function SinglePage() {
  const post = useLoaderData();
  console.log(post)
  return (
    <div className="singlePage">
      <div className="details">
      <div className="wrapper"><Slider images={post.images}/>
      <div className="info">
        <div className="top">
          <div className="post">
            <h1>{post.title}</h1>
              <div className="address">
                <img src="/pin.png" alt=""/><span className="text-3xl font-bold underline">{post.address}</span>
              </div>
              <div className="price">Ksh {post.price}</div>
            </div>
          <div className="user">
            <img src={post.user.avatar}></img>
            <div className="name">{post.user.username}</div>
          </div>
        </div>
        <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.postDetail.desc)}}></div>
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
                {post.postDetail.utilities ==="owner"?(
                  <p>Owner is responsible</p>
                ):( <p>Tenant is responsible</p>)
                }
              </div>
          </div>
          <div className="feature">
          <img src="/pet.png"/>
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "Allowed"? 
                  <p>Pets allowed</p>: <p>Pets not allowed</p>}
                
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
          <span>{post.postDetail.size}</span>         
          </div>
          <div className="size">
            <img src="/bed.png"/>
            <span>{post.bedroom} bedroom</span>            
          </div>
          <div className="size">
          <img src="/bath.png"/>
          <span>{post.bathroom} bathrrom</span>
          </div>
        </div>
        {/* Nearby places */}
        <p className="title">Nearby places</p>
        <div className="listHorizontal">          
            <div className="feature">
            <img src="/school.png"/>
              <div className="featureText">
                <span>School:</span>
                <p>{post.postDetail.school > 999 ? post.postDetail.school/1000+ "km":post.postDetail.school +"m" } away</p>
              </div>            
            </div>
            <div className="feature">
            <img src="/bus.png" alt=""/>
            <div className="featureText">
              <span>Bus Stop:</span>
              <p>{post.postDetail.bus}m away</p>
            </div>
            </div>
            <div className="feature">
            <img src="restaurant.png" alt=""/>
            <div className="featureText">
              <span>Restaurant:</span>
              <p>{post.postDetail.restaurant}m away</p>
            </div>
            </div>          
        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
          <Map propertyData={[post]}/>
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

export default SinglePage