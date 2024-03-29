import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedLevel, setCaseInfo } from "../action/index";
import "./ShoppingOptions.css";
import { createCase, getToken } from "../services";
import { shoppingOptions } from "../services/constants";
import { caseData } from "../reducer/data";

const SelectPackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  // useEffect(() => {
  //   // Function to handle message event
  //   const handleTokenMessage = async (event) => {
  //     // Always validate the origin of your messages for security purposes
  //     // if (event.origin !== 'URL_OF_YOUR_DOMAIN')
  //     //   return;

  //     const response = await getToken();

  //     console.log("Received token:", token);

  //     // Perform further actions with the token here
  //   };

  //   // Add message event listener
  //   window.addEventListener("message", handleTokenMessage);

  //   // Open the mini window on load
  //   window.open("url-to-your-api-call-page", "title", "width=600,height=400");

  //   // Cleanup: remove event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("message", handleTokenMessage);
  //   };
  // }, []);
  const handleNext = async (event, level) => {
    event.preventDefault();
    // dispatch(setSelectedLevel(level));
    try {
      const response = await createCase(level);
      // console.log(response.headers)
      dispatch(setCaseInfo(response.data)); // Dispatch the action with the result of the API call
    } catch (error) {
      // Handle any errors from the API call here
      dispatch(setCaseInfo("failed"));
      console.error("Failed to fetch data: ", error);
    }

    navigate("/assignment", { state: level });
    // dispatch(setCaseInfo(caseData));
    // if (response.success === 1) {
    //   setResult(response.data);
    // } else {
    //   setError(response.error);
    // }
  };

  return (
    <>
      <h3 style={{ margin: 20 }}>
        Combine TV, Internet, and Voice for the best deal
      </h3>
      <div className="shopping-container" style={{ alignItems: "center" }}>
        {shoppingOptions.map((option, index) => (
          <div key={index} className={`option ${option.level.toLowerCase()}`}>
            <h2>{`${option.play} ${option.level}`}</h2>
            <div className="banner">{option.banner}</div>
            <ul>
              <li>{option.channels_full} channels plus FREE HD</li>
              <li>Thousands of On Demand choices</li>
              <li>Watch on the MediaCo App</li>
              <li>Up to {option.internetSpeed} Internet Speeds</li>
              <li>Unlimited nationwide calling{option.calling}</li>
            </ul>
            <div className="price">
              From <span className="amount">${option.price}</span>
              <span className="term"> for 12 months when bundled</span>
            </div>
            <button onClick={(e) => handleNext(e, option.level)}>
              SHOP NOW
            </button>
          </div>
        ))}
        {/* {error && <p>Error: {error}</p>} */}
        {/* <div>Result: {result}</div> */}
      </div>
    </>
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <h2>Select an Appliance</h2>
  //     {appliances.map((item) => (
  //       <div key={item}>
  //         <input
  //           type="radio"
  //           id={item}
  //           name="appliance"
  //           value={item}
  //           checked={appliance === item}
  //           onChange={handleSelectionChange}
  //         />
  //         <label htmlFor={item}>{item}</label>
  //       </div>
  //     ))}
  //     <button type="submit" disabled={!appliance}>Next</button>
  //   </form>
  // );
};

export default SelectPackage;
