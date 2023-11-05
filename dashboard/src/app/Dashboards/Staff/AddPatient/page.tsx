'use client'
import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    address: '',
    gender: 'Male',
    dob: '',
    age: '',
    bloodGroup: '',
    aadharNumber: '',
    confirmInput: '',
    mobileNumber: ''
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = () => {
    // You can implement your form submission logic here
    console.log(formData);
    // Send formData to the server using an API request or other methods
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded ">
      <div className="grid grid-cols-2  gap-2">
        <div className="">
          <p className="">Patient Name: <input type="text" name="patientName" className="border rounded p-2 w-full" onChange={handleInputChange} /></p>
          <p className="">Address: <input type="text" name="address" className="border rounded p-2 w-full" onChange={handleInputChange} /></p>
        </div>
        <div className="">
          <p className="">Gender:
            <select name="gender" className="border rounded p-2 w-full" onChange={handleInputChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </p>
          <p className="">DOB: <input type="date" name="dob" className="border rounded p-2 w-full" onChange={handleInputChange} /></p>
        </div>
        <div className="">
          <p className="">Age: <input type="number" name="age" className="border rounded p-2 w-full" onChange={handleInputChange} /></p>
          <p className="">Aadhar No: <input type="number" pattern="[0-9]{12}" name="aadharNumber" className="border rounded p-2 w-full" onChange={handleInputChange} /></p>
       
        </div>
        <div className="">
        <p className="">Blood Group:
          <select name="bloodGroup" className="border rounded p-2 w-full" onChange={handleInputChange} value={formData.bloodGroup}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </p>
          
        <p className="">Confirm Aadhar: <input type="number" pattern="[0-9]{12}" name="aadharNumber" className="border rounded p-2 w-full" onChange={handleInputChange} /></p>
       
                </div>
        <div className="">
        <p className="">Mobile No: <input type="tel" name="mobileNumber" className="border rounded p-2 w-full" onChange={handleInputChange} /></p>


        </div>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Register
      </button>
    </div>
  );
};

export default RegistrationForm;