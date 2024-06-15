import "./signup.scss";
import countryData from "../../lib/countryData";

const defaultCountry = countryData.phone_countries.filter(
  (country) => country.code === countryData.default_country
);

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="img-section">
        <img src="/images/bg.png" alt="background-image" />
      </div>
      <form className="signup-form">
        <h2>
          Welcome to <span className="site-name">airbnb</span>
        </h2>

        <div className="form-input">
          <label htmlFor="country">Country/Region</label>
          <select
            name="country"
            id="country"
            className="country-select"
            value={countryData.default_country}
          >
            {countryData.phone_countries.map((country, index) => {
              return (
                <option value={country.code} key={index}>
                  {country.country_name} (+{country.prefix})
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-input">
          <label htmlFor="phone_number">Phone number</label>

          <div>
            <span className="phone_code_text">{`+${defaultCountry[0].prefix}`}</span>
            <input type="tel" name="phone_number" id="phone_number" />
          </div>
        </div>

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form-input">
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form-input">
          <label htmlFor="password"> Confirm Password </label>
          <input
            type="confirm_password"
            name="confirm_password"
            id="confirm_password"
          />
        </div>

        <button type="submit" className="btn btn-signup">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
