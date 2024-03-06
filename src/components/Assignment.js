import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCaseInfo, setCustomerDetails } from "../action/index";
import "../styles/assignment.css";
import { useLocation } from "react-router-dom";
import { customerAddressData, serviceDateData } from "../reducer/data";

const Assignment = () => {
  const { caseInfo } = useSelector((state) => state.app);
  const location = useLocation();
  const stages =
    caseInfo && caseInfo.uiResources ? caseInfo.uiResources.navigation : [];
  useEffect(() => {
    const level = location.state;
  }, []);
  const dispatch = useDispatch();
  console.log(caseInfo, ">>>>");
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setDetails({ ...details, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(setCustomerDetails(details));
  //   navigate("/verify");
  // };
  if (
    (caseInfo &&
      caseInfo.data.caseInfo.assignments[0].actions[0].ID == "CustomerInfo") ||
    caseInfo.data.caseInfo.assignments[0].actions[0].ID == "CustomerAddress" ||
    caseInfo.data.caseInfo.assignments[0].actions[0].ID == "ServiceDate"
  ) {
    return (
      <div className="customer-form-container">
        <h3>{caseInfo.data.caseInfo.assignments[0].name}</h3>
        <p>Enter Information</p>
        <div className="form-step-indicator">
          {stages.steps.map((x, i) => {
            if (
              x.actionID === caseInfo.data.caseInfo.assignments[0].actions[0].ID
            ) {
              return (
                <span className="step active">
                  {i + 1} {x.name}
                </span>
              );
            } else {
              return (
                <span className="step">
                  {i + 1} {x.name}
                </span>
              );
            }
          })}
        </div>
        <form>
          {caseInfo.uiResources.resources.views[
            `${caseInfo.data.caseInfo.assignments[0].actions[0].ID}`
          ][0].children[0].children.map((x) => {
            return (
              <div className="form-group">
                <label htmlFor="firstName">{x.config.label.slice(3)}</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  // value={formData.firstName}
                  // onChange={handleChange}
                />
              </div>
            );
          })}
          <div className="form-actions">
            {caseInfo.uiResources.actionButtons.secondary.map((x) => (
              <button type="button">{x.name}</button>
            ))}
            <button
              type="submit"
              onClick={() => {
                try {
                  const actionId =
                    caseInfo.data.caseInfo.assignments[0].actions[0].ID;
                  const dataToSet =
                    actionId === "CustomerInfo"
                      ? customerAddressData
                      : serviceDateData;
                  dispatch(setCaseInfo(dataToSet));
                } catch (error) {
                  console.error("Error on button click:", error);
                  // Handle the error appropriately
                }
              }}
            >
              {caseInfo.uiResources.actionButtons.main[0].name}m
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (
    caseInfo.data.caseInfo.assignments[0].actions[0].ID == "RequestedService"
  ) {
    return (
      <>
        <form>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              // value={formData.firstName}
              // onChange={handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              // value={formData.lastName}
              // onChange={handleChange}
            />
          </label>
          {/* ... other input fields ... */}
          <fieldset disabled>
            <legend>Package</legend>
            <label>
              <input
                type="radio"
                name="package"
                // value="Silver"
                // checked={formData.package === 'Silver'}
                // onChange={handleChange}
              />
              Silver
            </label>
            {/* ... other package options ... */}
          </fieldset>
          <fieldset disabled>
            <legend>Internet Option</legend>
            <label>
              <input
                type="radio"
                name="internetOption"
                // value="100Mbps"
                // checked={formData.internetOption === '100Mbps'}
                // onChange={handleChange}
              />
              100 Mbps
            </label>
            {/* ... other internet options ... */}
          </fieldset>
          <fieldset disabled>
            <legend>TV Option</legend>
            <label>
              <input
                type="radio"
                name="tvOption"
                // value="Basic"
                // checked={formData.tvOption === 'Basic'}
                // onChange={handleChange}
              />
              Basic
            </label>
            {/* ... other TV options ... */}
          </fieldset>
          <fieldset disabled>
            <legend>Phone Option</legend>
            <label>
              <input
                type="radio"
                name="phoneOption"
                // value="US/Canada"
                // checked={formData.phoneOption === 'US/Canada'}
                // onChange={handleChange}
              />
              US/Canada
            </label>
            {/* ... other phone options ... */}
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
  return <>sdf</>;
};

export default Assignment;
