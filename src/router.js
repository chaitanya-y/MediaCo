import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectPackage from './components/SelectPackage';
import CustomerDetailsForm from './components/CustomerDetailsForm';
import Assignment from './components/Assignment';
import VerificationScreen from './components/VerificationScreen';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectPackage />} />
          {/* <Route path="/customer-details" element={<CustomerDetailsForm />} /> */}
          <Route path="/assignment" element={<Assignment />} />
          {/* <Route path="/verify" element={<VerificationScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;