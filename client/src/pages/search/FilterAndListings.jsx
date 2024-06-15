import Card from "./Card";
import "./filter_and_lisitings.scss";

const Filter = () => {
  return (
    <div className="filters-and-listings">
      <p className="result-for">Search Results For</p>

      <form className="search-form">
        <div className="form-input location-field">
          <label htmlFor="city">Location</label>
          <input type="text" name="city" id="city" placeholder="Enter City" />
        </div>

        <div className="other-fields">
          <div className="form-input">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div className="form-input">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="">Any</option>
              <option value="room">Room</option>
              <option value="space">Space</option>
              <option value="hotel">Hotel</option>
            </select>
          </div>

          <div className="form-input">
            <label htmlFor="min_price">Min price</label>
            <input type="number" name="min_price" id="min_price" />
          </div>

          <div className="form-input">
            <label htmlFor="max_price">Max price</label>
            <input type="number" name="max_price" id="max_price" />
          </div>

          <div className="form-input">
            <label htmlFor="bedroom">Bedroom</label>
            <input type="number" name="bedroom" id="bedroom" />
          </div>

          <div className="form-input">
            <button type="submit">
              <img src="images/search.png" alt="" />
            </button>
          </div>
        </div>
      </form>

      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Filter;
