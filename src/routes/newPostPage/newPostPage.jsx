import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [position, setPosition] = useState(null);
  const [showMapModal, setShowMapModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  const handleGetLocation = () => {
    
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Location access granted:", position);
            // You can proceed with using the location here
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              alert("Please enable location services in your browser settings to continue.");
            } else if (error.code === error.POSITION_UNAVAILABLE) {
              alert("Location information is unavailable. Try again later.");
            } else if (error.code === error.TIMEOUT) {
              alert("The request to get your location timed out.");
            } else {
              alert("An unknown error occurred while requesting location.");
            }
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    
    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        console.log("Position:", coords);
      },
      (err) => {
        console.error("Geolocation error:", err);
      }
    );
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <div className="wrapper">
          <h1>Add New Post</h1>

          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <div className="quill">
                <ReactQuill theme="snow" onChange={setValue} value={value} />
              </div>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={0} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={0} id="bathroom" name="bathroom" type="number" />
            </div>

            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                value={position ? position[0] : ""}
                readOnly
              />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                value={position ? position[1] : ""}
                readOnly
              />
            </div>

            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>

            <button className="sendButton">Add</button>
            {error && <span>{error}</span>}
          </form>

          <div className="locationButtons">
            <button type="button" onClick={handleGetLocation}>
              Get Location
            </button>

            {position && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps?q=${position[0]},${position[1]}`,
                      "_blank"
                    )
                  }
                >
                  Open in Google Maps
                </button>

                <button type="button" onClick={() => setShowMapModal(true)}>
                  View on Map
                </button>
              </>
            )}
          </div>

          {/* Map Modal */}
          {showMapModal && position && (
            <div className="mapModal">
              <div className="mapContent">
                <button
                  className="closeButton"
                  onClick={() => setShowMapModal(false)}
                >
                  Close
                </button>
                <iframe
                  width="100%"
                  height="450"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${position[0]},${position[1]}&output=embed`}
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "michiradev",
            uploadPreset: "estate",
            maxImageFileSize: 2500000,
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
