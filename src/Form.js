import React, { useEffect, useState } from 'react';
import './form.css';
import Button from './components/Button';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the specific field in formData
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    };
useEffect(() => {
  console.log('Component mounted');

  return () => {
    console.log('Component unmounted');
  };
}, []);


  return (
    <>
      <h1>Form</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} text="Submit"/>
      </form>

      {formData.name && <h2>Name: {formData.name}</h2>}
      {formData.email && <h2>Email: {formData.email}</h2>}
      {formData.password && <h2>Password: {formData.password}</h2>}
    </>
  );
}

export default Form;
