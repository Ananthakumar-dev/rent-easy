import { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.scss";

const Signin = () => {
  const [loginWith, setLoginWith] = useState("email");

  return (
    <>
      <div className="signup-wrapper">
        <div className="img-section">
          <img src="/images/bg.png" alt="background-image" />
        </div>

        <div className="signup-div">
          <form className="signup-form">
            <h2>You can login with</h2>

            <p className="login-with">
              <span
                className={loginWith === "email" ? `active` : ``}
                onClick={() => setLoginWith("email")}
              >
                Email
              </span>
              <span
                className={loginWith === "phone" ? `active` : ``}
                onClick={() => setLoginWith("phone")}
              >
                Phone number
              </span>
            </p>

            {loginWith === "email" && (
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
            )}

            {loginWith === "phone" && (
              <div className="form-input">
                <label htmlFor="phone_number">Phone number</label>

                <div>
                  <input type="tel" name="phone_number" id="phone_number" />
                </div>
              </div>
            )}

            <div className="form-input">
              <label htmlFor="password"> Password </label>
              <input type="password" name="password" id="password" />
            </div>

            <button type="submit" className="btn btn-signup">
              Sign In
            </button>
          </form>

          <div className="signup-text">
            <p>
              Don't have an account? Click here to
              <span>
                <Link to={"/signup"}>Signup</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
