import { useSearchParams } from "react-router-dom";
import "./Filter.scss";
import { useState } from "react";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000,
    bedroom: parseInt( searchParams.get("bedroom") || 0)
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleFilter = () => {
    setSearchParams(query);
  };

  // console.log(searchParams);
  return (
    <div className="filter">
      <div>
        <h1>
          Search results for <b>{searchParams.get("city")}</b>
        </h1>
      </div>
      {/* top */}
      <div className="top">
        <div className="item">
          <label htmlFor="City">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      {/* bottom */}
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={handleChange} 
          defaultValue={query.type}>
          
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* property */}
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" onChange={handleChange}
           defaultValue={query.property}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="house">House</option>
          </select>
        </div>
        {/* min price */}
        <div className="item">
          <label htmlFor="minPrice">Min price</label>
          <input
            name="minPrice"
            id="minPrice"
            type="number"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        {/* max price */}
        <div className="item">
          <label htmlFor="maxPrice">Max price</label>
          <input
            name="maxPrice"
            id="maxPrice"
            type="number"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        {/* bedroom */}
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            name="bedroom"
            id="bedroom"
            type="number"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>

        <button className="search" onClick={handleFilter}>
          <img src="/search.png"></img>
        </button>
      </div>
    </div>
  );
}

export default Filter;
