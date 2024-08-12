import React, { useState } from "react";
import { conferenceData } from "../contants";
const ConferenceSection = () => {
  // State to track registration form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
  });
  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {
        conferenceData.map((conferenceData) => {
          return (
            <div className="mx-2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                {conferenceData.title}
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Date:</strong> {conferenceData.date}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Location:</strong> {conferenceData.location}
              </p>
              <p className="text-gray-700 mb-8">{conferenceData.description}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Register for the Conference
              </h3>
            </div>
          )
        })
      }

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="firstName" className="input-text">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-primary p-3"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-primary p-3"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-primary p-3"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="organization" className="block text-gray-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-primary p-3"
            placeholder="Enter your organization (optional)"
          />
        </div>
        <button
          type="submit"
          className="bg-secondary hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default ConferenceSection;
