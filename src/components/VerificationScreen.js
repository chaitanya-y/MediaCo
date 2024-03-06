import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const VerificationScreen = () => {
  const { selectedLevel, customerDetails } = useSelector((state) => state.app);
  const navigate = useNavigate();



// const handleSubmit = () => {
//     // Note: The URL provided is not valid, so replace it with your actual API endpoint.
//     fetch('https://your-api-endpoint.com/submit-request', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(details)
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Successfully submitted!');
//         onConfirm();
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   };

  return (
    <div>
      <h2>Verify Details</h2>
      <p><strong>Selected Appliance:</strong> {selectedLevel}</p>
      <p><strong>Name:</strong> {customerDetails && customerDetails.name}</p>
      <p><strong>Address:</strong> {customerDetails && customerDetails.address}</p>
      <p><strong>Problem Description:</strong> {customerDetails && customerDetails.problemDescription}</p>
      <button>Confirm and Submit</button>
    </div>
  );
};

export default VerificationScreen;
