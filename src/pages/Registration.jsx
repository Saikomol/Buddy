import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerForm } from "../API/Api";

function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerForm(
        formData.firstname,
        formData.lastname,
        formData.email,
        formData.password
      );
      console.log(data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name : </label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="firstname"
        />

        <label htmlFor="lastname">Last name : </label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="lastname"
        />
        <label htmlFor="email">email : </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
