import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="left-section">
        <h1>Find Real Estate & Get Your Dream Place.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque porro
          quasi saepe velit quod nam laudantium amet nulla officia quibusdam
          eligendi neque nobis, alias, rem officiis explicabo incidunt iure
          veritatis?
        </p>
        <SearchForm />

        <div className="statistics">
          <div className="box">
            <h3>16+</h3>
            <p>Years of experience</p>
          </div>
          <div className="box">
            <h3>200</h3>
            <p>Awards Gained</p>
          </div>
          <div className="box">
            <h3>1200+</h3>
            <p>Properties</p>
          </div>
        </div>

        <p className="search-text">
          No idea to what can search?
          <span>
            <Link to={"/search"}>Click Here</Link>
          </span>
        </p>
      </div>

      <div className="right-section">
        <img src="/images/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
