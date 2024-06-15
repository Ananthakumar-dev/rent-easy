import { useState } from "react";
import "./searchForm.scss";
import { BiSearch } from "react-icons/bi";

const SearchForm = () => {
  const [searchType, setSearchType] = useState("buy");
  return (
    <form className="search-form">
      <div className="search-box">
        <span
          className={searchType === "buy" ? "active" : ""}
          onClick={() => setSearchType("buy")}
        >
          Buy
        </span>
        <span
          className={searchType === "rent" ? "active" : ""}
          onClick={() => setSearchType("rent")}
        >
          Rent
        </span>
      </div>

      <div className="inputs">
        <input type="text" placeholder="Enter a city" />
        <input type="number" placeholder="Min price" min={0} max={1000} />
        <input type="number" placeholder="Max price" min={0} max={1000} />

        <button type="submit">
          <BiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
