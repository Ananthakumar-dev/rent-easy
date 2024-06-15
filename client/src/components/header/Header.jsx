import { Link } from "react-router-dom";
import SiteLogo from "../../assets/logo/SiteLogo.jsx";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <div className="left-section">
          <Link to={"/"} className="site-logo">
            <SiteLogo className="logo" />
          </Link>

          <a href=""> About </a>
          <a href=""> Contact </a>
          <a href=""> Agents </a>
        </div>
        <div className="right-section">
          <Link to={"/signin"}> Signin </Link>
          <Link to={"/signup"} className="btn btn-primary signup-btn">
            SignUp
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
