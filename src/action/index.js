// Action Types
export const SET_SELECTED_LEVEL = 'SET_SELECTED_LEVEL';
export const SET_CUSTOMER_DETAILS = 'SET_CUSTOMER_DETAILS';
export const SET_CASE_INFO = 'SET_CASE_INFO';
export const SET_ASSIGNMENT_INFO = 'SET_ASSIGNMENT_INFO';


// Action Creators
// export const setSelectedLevel = (level) => ({
//   type: SET_SELECTED_LEVEL,
//   payload: level,
// });

// export const setCustomerDetails = (details) => ({
//   type: SET_CUSTOMER_DETAILS,
//   payload: details,
// });

export const setCaseInfo = (details) => ({
  type: SET_CASE_INFO,
  payload: details,
});

// export const setAssignmentInfo = (details) => ({
//   type: SET_ASSIGNMENT_INFO,
//   payload: details,
// });