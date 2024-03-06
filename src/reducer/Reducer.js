import {
  SET_SELECTED_LEVEL,
  SET_CUSTOMER_DETAILS,
  SET_CASE_INFO,
  SET_ASSIGNMENT_INFO,
} from "../action";


const initialState = {
  caseInfo: {},
  // assignmentInfo: [],
  // selectedLevel: "s",
  // customerDetails: {},
};

export function appReducer(state = initialState, action) {
  console.log(action.payload,'reducer')
  switch (action.type) {
    // case SET_SELECTED_LEVEL:
      // return { ...state, selectedLevel: action.payload };
    // case SET_CUSTOMER_DETAILS:
      // return { ...state, customerDetails: action.payload };
    case SET_CASE_INFO:
      return { ...state, caseInfo: action.payload };
    // case SET_ASSIGNMENT_INFO:
      // return { ...state, assignmentInfo: action.payload };
    default:
      return state;
  }
}

// export function caseInfoReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_SELECTED_LEVEL:
//       return { ...state, selectedLevel: action.payload };
//     case SET_CUSTOMER_DETAILS:
//       return { ...state, customerDetails: action.payload };
//     default:
//       return state;
//   }
// }

// export function assignmentInfoReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_SELECTED_LEVEL:
//       return { ...state, selectedLevel: action.payload };
//     case SET_CUSTOMER_DETAILS:
//       return { ...state, customerDetails: action.payload };
//     default:
//       return state;
//   }
// }
