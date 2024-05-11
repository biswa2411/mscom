"use client";

import { BillingAddrs } from "@components/pages/profile/BillingAddrs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Profile = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    billingFirstName: "",
    billingLastName: "",
    billingEmail: "",
    billingPhone: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      billingFirstName: "",
      billingLastName: "",
      billingEmail: "",
      billingPhone: "",
      companyName: "",
      address: "",
      city: "",
      state: "",
      pin: "",
    });
  };

  return (
    <div className="bg-white h-full w-full">
      {/* <BillingAddrs /> */}
      <div className="px-[5%] py-[5%]">
        <div className="flex justify-between">
          <h2 className="text-[16px] md:text-[22px] lg:text-[32px] text-[#0E2920] font-bold">Personal Information</h2>
          <div className="flex justify-center items-center gap-1 py-1 px-2 rounded-[4px] border-[1px] cursor cursor-pointer border-[#0E2920]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.03961 10.8704L1.59961 14.9L5.43961 14.396L14.4876 5.764C14.6864 5.57485 14.846 5.34838 14.9573 5.09754C15.0686 4.8467 15.1295 4.57639 15.1363 4.30205C15.1431 4.0277 15.0959 3.7547 14.9972 3.49863C14.8985 3.24256 14.7504 3.00842 14.5612 2.8096C14.3721 2.61078 14.1456 2.45116 13.8947 2.33986C13.6439 2.22856 13.3736 2.16776 13.0993 2.16093C12.8249 2.15409 12.5519 2.20136 12.2958 2.30003C12.0398 2.3987 11.8056 2.54685 11.6068 2.736L3.03961 10.8704Z"
                stroke="#0E2920"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <button className="text-[#0E2920]">Edit</button>
          </div>
        </div>
        <div className="flex md:justify-start md:items-start flex-col md:flex-row mr-[20%]">
          <div className="flex flex-col py-1 md:mr-5  md:w-[50%]">
            <label className="font-semibold text-[14px] text py-1-[#0E2920]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col py-1  md:w-[50%]">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
        </div>
        <div className="flex md:justify-start md:items-start flex-col md:flex-row  mr-[20%]">
          <div className="flex flex-col md:mr-5  md:w-[50%] py-1">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col md:w-[50%] py-1">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Phone No
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Enter Phone No"
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
        </div>
      </div>

      {/* Billing Address  */}
      <div className="px-[5%] py-[5%]">
        <div className="flex justify-between">
          <h2 className="text-[#0E2920] font-bold">Billing Address</h2>
          <div className="flex justify-center items-center gap-1 py-1 px-2 rounded-[4px] border-[1px] cursor cursor-pointer border-[#0E2920]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.03961 10.8704L1.59961 14.9L5.43961 14.396L14.4876 5.764C14.6864 5.57485 14.846 5.34838 14.9573 5.09754C15.0686 4.8467 15.1295 4.57639 15.1363 4.30205C15.1431 4.0277 15.0959 3.7547 14.9972 3.49863C14.8985 3.24256 14.7504 3.00842 14.5612 2.8096C14.3721 2.61078 14.1456 2.45116 13.8947 2.33986C13.6439 2.22856 13.3736 2.16776 13.0993 2.16093C12.8249 2.15409 12.5519 2.20136 12.2958 2.30003C12.0398 2.3987 11.8056 2.54685 11.6068 2.736L3.03961 10.8704Z"
                stroke="#0E2920"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <button className="text-[#0E2920]">Edit</button>
          </div>
        </div>
        <div>
        <div className="flex md:justify-start md:items-start flex-col md:flex-row mr-[20%]">
          <div className="flex flex-col py-1 md:mr-5  md:w-[50%]">
            <label className="font-semibold text-[14px] text py-1-[#0E2920]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.billingFirstName}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col py-1  md:w-[50%]">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.billingLastName}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
        </div>
        <div className="flex md:justify-start md:items-start flex-col md:flex-row  mr-[20%]">
          <div className="flex flex-col md:mr-5  md:w-[50%] py-1">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.billingEmail}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col md:w-[50%] py-1">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Phone No
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.billingPhone}
              placeholder="Enter Phone No"
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
        </div>
          <div className="flex flex-col py-1 mr-[20%]">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              placeholder="Enter Company Name"
              onChange={handleInputChange}
              className="border border-black  pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col py-1 mr-[20%]">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Street Adders
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter Address"
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col md:flex-row  mr-[20%] md:mr-[11%]">
            <div className="flex flex-col py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                Town/City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Enter Town/City"
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px] md:w-[70%] py-2"
              />
            </div>
            <div className="flex flex-col py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                placeholder="Enter State"
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px]  md:w-[70%] py-2"
              />
            </div>
            <div className="flex flex-col py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                PIN Code
              </label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
                placeholder="Enter PIN Code"
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px]  md:w-[70%] py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <button
        className=" bg-[#B88E2F] hover:bg-[#917b47] py-2 px-5 rounded-full text-white"
        onClick={handleSubmit}
      >
        Save
      </button>
      </div>
    </div>
  );
};

export default Profile;
