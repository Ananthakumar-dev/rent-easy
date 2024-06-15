import FilterAndListings from "./FilterAndListings";
import Map from "./Map";
import "./search.scss";

const Search = () => {
  return (
    <div className="search-page">
      <FilterAndListings />
      <Map />
    </div>
  );
};

export default Search;
