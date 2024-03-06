// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch ,useSelector} from 'react-redux';
// import { setCustomerDetails } from '../action/index';

// const CustomerDetailsForm = () => {
//   const [details, setDetails] = useState({
//     name: '',
//     address: '',
//     problemDescription: ''
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setDetails({ ...details, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(setCustomerDetails(details));
//     navigate('/verify');
//   };
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Customer Details</h2>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={details.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={details.address}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="problemDescription">Problem Description:</label>
//         <textarea
//           id="problemDescription"
//           name="problemDescription"
//           value={details.problemDescription}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default CustomerDetailsForm;
