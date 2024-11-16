import "./Filter.scss";

function Filter() {
  return (
  <div className="filter">
    <div>
      <h1>Search results for <b>London</b>
      </h1>
    </div>
    {/* top */}
    <div className="top">
    <div className="item">
      <label htmlFor="City">Location</label>
      <input type="text" id="city" name="city" placeholder="City location"></input>
    </div>
    </div>
    {/* bottom */}
  <div className="bottom">
    <div className="item">
      <label htmlFor="type">Type</label>
      <select name="type" id="type">
        <option value="">any</option>
        <option value="">Buy</option>
        <option value="">Rent</option>
      </select>
    </div>
 
    {/* property */}
    <div className="item">
      <label htmlFor="property">Property</label>
      <select name="propery" id="property">
      <option value="">any</option>
      <option value="">Apartment</option>
      <option value="">Condo</option>
      <option value="">House</option>
      </select>
    </div>
   {/* min price */}
    <div className="item">
      <label htmlFor="minPrice">Min price</label>
      <select name="minPrice" id="minPrice">
      <option value="">any</option>
      <option value="">Apartment</option>
      <option value="">Condo</option>
      <option value="">House</option>
      </select>
    </div>
{/* max price */}
    <div className="item">
      <label htmlFor="maxPrice">Max price</label>
      <select name="maxPrice" id="maxPrice">
      <option value="">any</option>
      <option value="">Apartment</option>
      <option value="">Condo</option>
      <option value="">House</option>
      </select>
    </div>
    {/* bedroom */}
    <div className="item">
      <label htmlFor="bedroom">Bedroom</label>
      <select name="bedroom" id="bedroom">
      <option value="">any</option>
      <option value="">Apartment</option>
      <option value="">Condo</option>
      <option value="">House</option>
      </select>
    </div>
  </div>
</div>
  )
}

export default Filter