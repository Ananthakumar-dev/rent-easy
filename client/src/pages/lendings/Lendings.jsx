import { Link } from "react-router-dom";
import lendingData, { lendingActions } from "../../lib/lendingData";
import "./lendings.scss";
import { useReducer } from "react";
import { lendingReducer } from "../../reducers/lendingReducers";
import Basics from "../manage_listing/Basics";
import Description from "../manage_listing/Description";
import Location from "../manage_listing/Location";
import Photos from "../manage_listing/Photos";
import Price from "../manage_listing/Price";

const Lendings = () => {
  const [lending, dispatch] = useReducer(lendingReducer, lendingData);

  const currentStep = lending.data.filter(
    (el) => el.stepname === lending.currentStep
  );

  const currentIndex = lending.steps.indexOf(currentStep[0].stepname);

  return (
    <>
      <h1>Your Lendings</h1>

      <div className="manage-listing">
        <div className="tabs">
          <nav>
            <ul>
              {lending.steps.map((step, index) => {
                return (
                  <li
                    key={index}
                    onClick={() =>
                      dispatch({
                        type: lendingActions.STEP_CHANGE,
                        data: { stepname: step },
                      })
                    }
                  >
                    <Link
                      className={step === lending.currentStep ? `active` : ``}
                    >
                      {step}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="current-step">
          {currentStep[0].stepname === "basics" && <Basics />}
          {currentStep[0].stepname === "description" && <Description />}
          {currentStep[0].stepname === "photos" && <Photos />}
          {currentStep[0].stepname === "location" && <Location />}
          {currentStep[0].stepname === "price" && <Price />}
        </div>

        <div className="lending-footer">
          <button
            onClick={() => dispatch({ type: lendingActions.PREV_STEP })}
            disabled={!currentIndex}
          >
            Back
          </button>
          {currentIndex + 1 < lending.steps.length && (
            <button
              onClick={() => dispatch({ type: lendingActions.NEXT_STEP })}
            >
              Next
            </button>
          )}
          {currentIndex + 1 === lending.steps.length && (
            <button onClick={() => dispatch({ type: lendingActions.COMPLETE })}>
              Complete
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Lendings;
