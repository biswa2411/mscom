"use client";

import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex md:flex-row  flex-col justify-center items-center bg-[#0E2920] font-medium text-[16px] rounded-bl-[100px] mb-[5%]">
      <div className="text-white md:px-[5%] px-[1%] md:py-[5%] py-[1%] w-[60%]">
        <h4 className="uppercase font-semibold text-[16px] pt-10">
          Get In Touch With Us
        </h4>
        <h2 className="font-bold text-[48px] uppercase pt-10">
          Gorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p>
          For More Information About Our Product & Services. Please feel free to
          contact us using the form.
        </p>
        <p>Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="flex justify-between py-10">
          <div className="flex items-center gap-2">
            <Image src="/timeIcon.svg" width={20} height={20} alt="Image" />
            <p>Monday-Friday: 9:00 – 18:00</p>
          </div>

          <div className="flex items-center gap-2 mr-[10%]">
            <Image src="/phoneIcon.svg" width={20} height={20} alt="Image" />
            <p>+(91) 6370 662 117</p>
          </div>
        </div>
      </div>
      <div className="md:px-[5%] px-[1%] md:py-[5%] py-[1%] w-[40%]">
        <div className="bg-[#1e342c] p-[10%] rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-6 ">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Your Full Name"
                onChange={handleChange}
                className="w-full py-3 px-2 rounded-md border border-[#FFF3E3] bg-[#1e342c] text-[#FFF3E3]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email Address"
                onChange={handleChange}
                className="w-full py-3 px-2 rounded-md border border-[#FFF3E3] bg-[#1e342c] text-[#FFF3E3]"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Your Phone Number"
                onChange={handleChange}
                className="w-full py-3 px-2 rounded-md border border-[#FFF3E3] bg-[#1e342c] text-[#FFF3E3]"
              />
              <textarea
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="w-full  py-3 px-2 rounded-md border border-[#FFF3E3] bg-[#1e342c] text-[#FFF3E3]"
              />
              <button className="bg-[#FFF3E3] hover:bg-[#e4d9ca] uppercase py-[3%] w-full rounded-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
