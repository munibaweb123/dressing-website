"use client";

import { useRef, useState } from "react";

export default function ShippingForm() {
    const getName = useRef<HTMLInputElement>(null);
    const getPhone = useRef<HTMLInputElement>(null);
    const getAddress = useRef<HTMLInputElement>(null);
    const getCity = useRef<HTMLInputElement>(null);
    const getState = useRef<HTMLInputElement>(null);
    const getZip = useRef<HTMLInputElement>(null);
    const getCountry = useRef<HTMLSelectElement>(null);
    const getResidential = useRef<HTMLSelectElement>(null);
    
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    cityLocality: "",
    stateProvince: "",
    postalCode: "",
    countryCode: "US",
    residentialIndicator: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    const payload = {
        shipToAddress: {
            name: formData.name,
            phone: formData.phone,
            addressLine1: formData.addressLine1,
            cityLocality: formData.cityLocality,
            stateProvince: formData.stateProvince,
            postalCode: formData.postalCode,
            countryCode: formData.countryCode,
            residentialIndicator: formData.residentialIndicator,
        },
        packages: [
            {
            weight: {
                value: 1,
                unit: "ounce",
            },
            },
        ],
        };
        const res = await fetch('http://localhost:3000/api/shipengine', {
            method: 'POST',
          
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        console.log(data);
        console.log("Payload:", JSON.stringify(payload, null, 2));

  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          ref={getName}
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          ref={getPhone}
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="addressLine1"
          ref={getAddress}
          placeholder="Street Address"
          value={formData.addressLine1}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="cityLocality"
          ref={getCity}
          placeholder="City"
          value={formData.cityLocality}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="stateProvince"
          ref={getState}
          placeholder="State"
          value={formData.stateProvince}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="postalCode"
          ref={getZip}
          placeholder="ZIP Code"
          value={formData.postalCode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <select
          name="countryCode"
          value={formData.countryCode}
          ref={getCountry}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
          <option value="AU">Australia</option>
        </select>
        <select
          name="residentialIndicator"
          value={formData.residentialIndicator}
          ref={getResidential}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Residential Indicator</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
