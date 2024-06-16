import "./profile.scss";
import countryData from "../../lib/countryData";
import educationData from "../../lib/educationData";
import { useState } from "react";
import DatepickerWithHeader from "../../components/datepicker/DatepickerWithHeader";

const defaultCountry = countryData.phone_countries.filter(
  (country) => country.code === countryData.default_country
);

const currentDate = new Date();
const initialFormData = {
  country: countryData.default_country,
  phone_number: "",
  email: "",
  gender: "",
  education: [],
  dob: `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`,
  age: "",
  describe: "",
};

const Profile = () => {
  const [formData, setFormData] = useState(() => initialFormData);

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  const handleFileUpload = function (e) {
    const files = e.target.files;
  };

  return (
    <>
      <h1>Update your profile</h1>
      <div className="profile-page">
        <div className="file-upload">
          <div className="img-container">
            <img src="../../images/forest.jpg" alt="forest" />
          </div>

          <div className="img-uploader">
            <label htmlFor="profile">Profile</label>
            <input
              type="file"
              name="profile"
              id="profile"
              onChange={handleFileUpload}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input phone-input">
            <label htmlFor="phone_number">Phone number</label>

            <div>
              <select
                name="country"
                id="country"
                className="country-select"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                {countryData.phone_countries.map((country, index) => {
                  return (
                    <option value={country.code} key={index}>
                      {country.country_name} (+{country.prefix})
                    </option>
                  );
                })}
              </select>
              <span className="phone_code_text">{`+${defaultCountry[0].prefix}`}</span>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                className="phone_number"
                value={formData.phone_number}
                onChange={(e) =>
                  setFormData({ ...formData, phone_number: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="form-input">
            <label htmlFor="gender">Gender</label>
            <div className="gender_selection">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  checked={formData.gender === "male"}
                />
                <label htmlFor="male">Male</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  checked={formData.gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="education">Education qualification</label>
            <div className="qualifications">
              {educationData.map((value, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={`${value.name}_${index}`}>
                      {value.name}
                    </label>
                    <input
                      type="checkbox"
                      name="education[]"
                      id={`${value.name}_${index}`}
                      value={value.id}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: [
                            ...formData.education,
                            Number(e.target.value),
                          ],
                        })
                      }
                      checked={formData.education.includes(value.id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="dob">Date of birth</label>
            <DatepickerWithHeader />
          </div>

          <div className="form-input">
            <label htmlFor="age">Age</label>
            <select
              name="age"
              id="age"
              onChange={(e) =>
                setFormData({ ...formData, age: Number(e.target.value) })
              }
              value={formData.age}
            >
              <option value="">Select</option>
              {Array.from({ length: 18 }, (value, index) => {
                return (
                  <option value={index + 1} key={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-input">
            <label htmlFor="describe"> Describe about You</label>
            <textarea
              name="describe"
              id="describe"
              onChange={(e) =>
                setFormData({ ...formData, describe: e.target.value })
              }
              value={formData.describe}
            ></textarea>
          </div>

          <div className="form-input">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
