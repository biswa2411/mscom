"use client";

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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                fill="#FFF3E3"
              />
              <path
                d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                fill="#FFF3E3"
              />
            </svg>

            <p>Monday-Friday: 9:00 – 18:00</p>
          </div>

          <div className="flex items-center gap-2 mr-[10%]">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5562 10.9062L12.1007 11.359C12.1007 11.359 11.0181 12.4355 8.0631 9.4972C5.10812 6.55901 6.1907 5.48257 6.1907 5.48257L6.4775 5.19738C7.1841 4.49484 7.2507 3.36691 6.6342 2.54348L5.37326 0.859077C4.61028 -0.160083 3.13596 -0.294713 2.26145 0.574827L0.691848 2.13552C0.258228 2.56668 -0.0323518 3.12559 0.0028882 3.74561C0.0930382 5.33182 0.810708 8.7447 4.81536 12.7266C9.0621 16.9492 13.0468 17.117 14.6763 16.9651C15.1917 16.9171 15.6399 16.6546 16.0011 16.2954L17.4217 14.883C18.3806 13.9295 18.1102 12.2949 16.8833 11.628L14.9728 10.5894C14.1672 10.1515 13.1858 10.2801 12.5562 10.9062Z"
                fill="#FFF3E3"
              />
            </svg>
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
            <button className="bg-[#FFF3E3] hover:bg-[#e4d9ca] uppercase py-[3%] w-full rounded-full">Send Message</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
