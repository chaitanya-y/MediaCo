import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCaseInfo, setCustomerDetails } from "../action/index";
import "../styles/assignment.css";
import { useLocation } from "react-router-dom";
import { customerAddressData, serviceDateData } from "../reducer/data";
import { assignmentInfo } from "../services";
const Assignment = () => {
  const { caseInfo } = useSelector((state) => state.app);
  // const location = useLocation();
  // const level = location.state;
  const [formData, setFormData] = useState({});
  const [keys, setKeys] = useState([]);
  const [taskCompleted, setCompleted] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {setFormData({})},[caseInfo])

  const stages =
    caseInfo && caseInfo.uiResources ? caseInfo.uiResources.navigation : [];
  // useEffect(() => {
  // }, []);
  const dispatch = useDispatch();
  // console.log(caseInfo, ">>>>");
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setDetails({ ...details, [name]: value });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData,'postbody')

    try {
      const response = await assignmentInfo(
        caseInfo.data.caseInfo.content.pyID,
        caseInfo.data.caseInfo.assignments[0].actions[0].ID,
        formData
      );
      setFormData(null);
      // console.log(response.headers)
      dispatch(setCaseInfo(response.data)); // Dispatch the action with the result of the API call
    } catch (error) {
      // Handle any errors from the API call here
      dispatch(setCaseInfo("failed"));
      console.error("Failed to fetch data: ", error);
    }
    // dispatch(setCustomerDetails(details));
    // navigate("/verify");
  };

  const handlerequestedService = async (event) => {
    event.preventDefault();
    // console.log(formData,'postbody')

    try {
      const response = await assignmentInfo(
        caseInfo.data.caseInfo.content.pyID,
        caseInfo.data.caseInfo.assignments[0].actions[0].ID,
        {}
      );
      alert(
        "Thanks for selecting a package with us. A technician will contact you with in the next couple of days to schedule an installation. If you have any questions, you can contact us directly at1-800-555-1234 or you can chat with us."
      );
      navigate("/");
    } catch (error) {
      // Handle any errors from the API call here
      dispatch(setCaseInfo("failed"));
      console.error("Failed to fetch data: ", error);
    }
    // dispatch(setCustomerDetails(details));
    // navigate("/verify");
  };

  const handleInputChange = (fieldId, value) => {
    setFormData({ ...formData, [fieldId]: value });
    setKeys([...keys, fieldId]);
  };
  if (
    (caseInfo &&
      !taskCompleted &&
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
                <span className="step active" key={i}>
                  {i + 1} {x.name}
                </span>
              );
            } else {
              return (
                <span className="step" key={i}>
                  {i + 1} {x.name}
                </span>
              );
            }
          })}
        </div>
        <form>
          {caseInfo.uiResources.resources.views[
            `${caseInfo.data.caseInfo.assignments[0].actions[0].ID}`
          ][0].children[0].children.map((x, index) => {
            return (
              <div className="form-group" key={index+'a'}>
                <label htmlFor="firstName">{x.config.label.slice(3)}</label>
                <input
                  required
                  key={index}
                  value={formData ? formData[x.config.value.slice(4)]:''}
                  onChange={(e) =>
                    handleInputChange(x.config.value.slice(4), e.target.value)
                  }
                  // onChange={handleChange}
                />
              </div>
            );
          })}
          <div className="form-actions">
            {caseInfo.uiResources.actionButtons.secondary.map((x,i) => (
              <button type="button" key={'button'+i}>{x.name}</button>
            ))}
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              {caseInfo.uiResources.actionButtons.main[0].name}
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
      <div className="customer-form-container">
        <div>
          <h3>{caseInfo.data.caseInfo.assignments[0].name}</h3>
          <div className="form-step-indicator">
            {stages.steps.map((x, i) => {
              if (
                x.actionID ===
                caseInfo.data.caseInfo.assignments[0].actions[0].ID
              ) {
                return (
                  <span className="step active"key={i}>
                    {i + 1} {x.name}
                  </span>
                );
              } else {
                return (
                  <span className="step" key={i}>
                    {i + 1} {x.name}
                  </span>
                );
              }
            })}
          </div>
          <form>
            {caseInfo.uiResources.resources.views[
              `${caseInfo.data.caseInfo.assignments[0].actions[0].ID}`
            ][0].children.map((x) => {
             return x.children.map((x, index) => {
                return (
                  <div className="form-group" key={index+'b'}>
                    <label>
                      {x.config.label.slice(3)} :
                      {caseInfo.data.caseInfo.content[x.config.value.slice(4)]}
                    </label>
                  </div>
                );
              });
            })}

            {/* {Object.keys(caseInfo.data.caseInfo.content).map((x) => {
                  if (
                    keys.includes(x) &&
                    caseInfo.data.caseInfo.content[x] != null &&
                    caseInfo.data.caseInfo.content[x] != undefined &&
                    typeof caseInfo.data.caseInfo.content[x] === "string"
                  ) {
                    return (
                      <>
                        <div>
                          {x} : {caseInfo.data.caseInfo.content[x]}
                        </div>
                        <br />
                      </>
                    );
                  }
                })} */}
            <button type="submit" onClick={(e) => handlerequestedService(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  return <>sdf</>;
};

export default Assignment;
