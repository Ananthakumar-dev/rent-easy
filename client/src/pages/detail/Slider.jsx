import { useState } from "react";
import "./slider.scss";

const Slider = ({ data: { id, folder, images } }) => {
  const [fullViewImage, setFullViewImage] = useState(null);

  function handleFullViewSlider(type) {
    if (type === "prev") {
      if (fullViewImage === 0) {
        setFullViewImage(images.length - 1);
      } else {
        setFullViewImage(fullViewImage - 1);
      }
    } else {
      if (fullViewImage === images.length - 1) {
        setFullViewImage(0);
      } else {
        setFullViewImage(fullViewImage + 1);
      }
    }
  }

  return (
    <>
      <div className="slider">
        <div className="main-img">
          <img
            src={`../images/${folder}/${id}/${images[0]}`}
            alt="Detail image"
            onClick={() => setFullViewImage(0)}
          />
        </div>
        <div className="sub-img">
          {images.slice(1).map((image, index) => {
            return (
              <img
                src={`../images/${folder}/${id}/${image}`}
                alt="Detail image"
                key={index}
                onClick={() => setFullViewImage(index + 1)}
              />
            );
          })}
        </div>
      </div>

      {fullViewImage !== null && (
        <>
          <div className="full-view">
            <div className="arrow">
              <img
                src="../images/arrow.png"
                alt="Left arrow"
                onClick={() => handleFullViewSlider("prev")}
              />
            </div>

            <div className="img-section">
              <img
                src={`../images/${folder}/${id}/${images[fullViewImage]}`}
                alt="Image"
              />
            </div>

            <div className="arrow">
              <img
                src="../images/arrow.png"
                alt="Right arrow"
                onClick={() => handleFullViewSlider("next")}
              />
            </div>

            <span className="close-btn" onClick={() => setFullViewImage(null)}>
              x
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default Slider;
