import "./Filter.scss";

function Filter() {
  return (
    <div className="filter">
    <div>
      <h1>Search rsults for<b/>London</h1>
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

    </div>
    </div>
  )
}

export default Filter