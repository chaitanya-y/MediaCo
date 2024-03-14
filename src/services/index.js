import { bearerToken } from "./constants.js";
import { pegaInfinityURL, cases, assignment } from "./Endpoints";
// import { useDispatch } from "react-redux";
// import {caseData} from '../reducer/data.js'


export const createCase = async (level) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json, text/plain, */*");
  myHeaders.append("Cache-Control", "no-cache");
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Authorization", `Bearer ${bearerToken}`); // Replace YOUR_TOKEN wi   th your actual token
  // myHeaders.append("Cookie", "JSESSIONID=ABCB086210DFEB0347A767853A556A17"); // Replace YOUR_SESSION_ID with your actual session ID

  const raw = JSON.stringify({
    caseTypeID: "DIXL-MediaCo-Work-NewService",
    content: { Package: level },
    processID: "pyStartCase",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  try {
    const response = await fetch(`${pegaInfinityURL}${cases}`, requestOptions);
    console.log(response,'api',response.headers)
    const data = await response.json();
    return { success: 1, data };
  } catch (error) {
    return { success: 0, data: error };
  }
};

export const assignmentInfo = async (caseId, step, postBody) => {
  let ifMatch = "20240314T085411.713 GMT";


  console.log(caseId,step,postBody)
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json, text/plain, */*");
  myHeaders.append("Cache-Control", "no-cache");
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("If-Match",ifMatch);
  myHeaders.append("Authorization", `Bearer ${bearerToken}`); // Replace YOUR_TOKEN wi   th your actual token
  // myHeaders.append("Cookie", "JSESSIONID=ABCB086210DFEB0347A767853A556A17"); // Replace YOUR_SESSION_ID with your actual session ID

  const raw = JSON.stringify({
    content: postBody,
    pageInstructions: [],
  });

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
  };
  try {
    const response = await fetch(
      `${pegaInfinityURL}${assignment}ASSIGN-WORKLIST DIXL-MEDIACO-WORK ${caseId}!MASHUP/actions/${step}?viewType=form`,
      requestOptions
    );
    const data = await response.json();
    return { success: 1, data };
  } catch (error) {
    return { success: 0, data: error };
  }
};



export const getToken = async (caseId, step) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("client_id", "48349004502385887248");
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_secret", "5D7A66EEF3BF736A91314AA8046E8310");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  try {
    const response = await fetch(
      `${pegaInfinityURL}/PRRestService/oauth2/v1/token`,
      requestOptions
    );
    const data = await response.json();
    console.log(data,'token')
    return { success: 1, data };
  } catch (error) {
    return { success: 0, data: error };
  }
};