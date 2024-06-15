import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="img-section">
        <img src="images/forest.jpg" alt="forest" />
      </div>

      <div className="stats">
        <h3>A Great Apartment Next to the Beach</h3>

        <p className="location">
          <img src="images/pin.png" alt="pin" />
          <span>413, Beach road, near auditorium, London</span>
        </p>

        <span className="price">$1000</span>

        <div className="bottom">
          <div className="bed-bath">
            <img src="images/bed.png" alt="bedroom" />
            <span>2 Bedrooms</span>
            <img src="images/bath.png" alt="bathroom" />
            <span>2 Bathrooms</span>
          </div>

          <div className="wishlist">
            <a href="">
              <img src="images/save.png" alt="wishlist" />
            </a>
            <a href="">
              <img src="images/chat.png" alt="message" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
