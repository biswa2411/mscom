"use client";

import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Shop = () => {
  const availableSizes = ["A0", "A1", "A2", "A3", "A4", "customize"];
  const variants = ["Canvas Print", "Matte Print"];
  const chooseOptions = ["Hard Copy", "Soft Copy"];
  const personsAdded = ["1 Person", "2 Persons", "3 Persons", "4+ Persons"];

  const smallImages = [
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
    },
  ];

  const additionalInfo = [
    { label: "Weight", value: "2.5kg" },
    { label: "Type", value: "Digital" },
    { label: "Sizes", value: "A0, A1" },
    { label: "Variant", value: "Canvas Print, Matte Print" },
    { label: "Option", value: "Hard Copy, Soft Copy (Contact us on WhatsApp)" },
    {
      label: "Person",
      value: "One, Two, Three, Four+ (Contact us on WhatsApp)",
    },
  ];

  const shopSupport = [
    {
      img: "/shopVerified.svg",
    },
    {
      img: "/shopVan.svg",
    },
    {
      img: "/shopIcon3.svg",
    },
    {
      img: "/shopSupport.svg",
    },
  ];

  const shoppingItems = [
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      paintingType: "Digital Painting",
      price: "600",
      id: "1",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      paintingType: "Acrylic Painting",
      price: "1000",
      id: "2",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      paintingType: "Sketch Art",
      price: "1200",
      id: "3",
    },
  ];

  return (
    <>
      <div className="p-[5%]">
        <div className="flex-row md:flex gap-3">
          <div className="md:w-[50%] ">
            <div className="md:flex justify-between items-start">
              <div className="flex flex-row md:flex-col  gap-1 cursor-pointer">
                {smallImages.map((items, index) => (
                  <div key={index}>
                    <img
                      src={items.img}
                      alt="profile image"
                      height={150}
                      width={120}
                      className="border hover:border-[#0E2920] rounded-lg "
                    />
                  </div>
                ))}
              </div>
              <img
                src={"/shopImage.svg"}
                alt="profile image"
                height={470}
                width={470}
                className="flex justify-center items-center"
              />
            </div>
            <div className="flex justify-between py-[2%] gap-2">
              <div className="flex justify-center items-center gap-2 font-medium text-[16px] text-white bg-[#B88E2F] rounded-full shadow-lg py-2 w-full hover:bg-[#917b47]">
                <Image
                  src="/shopVan.svg"
                  alt="profile image"
                  height={20}
                  width={20}
                />
                <button className="">Add to Cart</button>
              </div>
              <div className="flex justify-center items-center gap-2 font-medium text-[16px] text-white bg-[#B88E2F] rounded-full shadow-lg py-2 w-full hover:bg-[#917b47]">
                <Image
                  src="/shopVan.svg"
                  alt="profile image"
                  height={20}
                  width={20}
                />
                <button className="">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="md:w-[50%] flex flex-col gap-2">
            <h1 className="text-[#000000] text-[16px] md:text-[26px] lg:text-[32px] font-bold">
              Digital Painting
            </h1>
            <h3 className="text-[#000000] font-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              voluptas placeat, recusandae fugit neque vel velit odio laborum
              quia odit necessitatibus eligendi, natus sed officia eos provident
              iure veritatis amet?
            </h3>
            <h4 className="font-semibold text-[#B88E2F] text-[16px] md:text-[20px] lg:text-[24px]">
              <span>₹ 34,334</span>
              {" - "}
              <span>₹ 32,323</span>
            </h4>
            <Rating name="half-rating" defaultValue={2.3} precision={0.1} />

            {/* Frame Size */}
            <div className="">
              <p className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                Frame size
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {availableSizes.map((size, index) => (
                  <button
                    key={index}
                    className="font-medium text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border border-black hover:border-[#B88E2F]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Variant */}
            <div className="">
              <p className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                Choose Variant
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {variants.map((size, index) => (
                  <button
                    key={index}
                    className="font-medium text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border border-black hover:border-[#B88E2F]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Option */}
            <div className="">
              <p className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                Choose Option
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {chooseOptions.map((size, index) => (
                  <button
                    key={index}
                    className="font-medium text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border border-black hover:border-[#B88E2F]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* No. of Person in your photo */}
            <div className="">
              <p className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                No. of Person in your photo
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {personsAdded.map((size, index) => (
                  <button
                    key={index}
                    className="font-medium text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border border-black hover:border-[#B88E2F]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-10">
              <input
                type="text"
                name="coupon"
                placeholder="Enter Pincode"
                // value={formData.firstName}
                // onChange={handleInputChange}
                className="border border-black pl-2 py-3 px-5 rounded-full mr-2"
              />
              <button className=" bg-[#B88E2F] hover:bg-[#917b47] font-bold py-3 px-5 rounded-full text-white">
                Check Pincode
              </button>
            </div>

            <label
              htmlFor="file-upload"
              className="flex justify-center items-center py-[10%] px-10 mt-7 rounded-lg shadow-lg border border-gray-300 cursor-pointer gap-2"
            >
              <img
                src={"/fileUpload.svg"}
                alt="profile image"
                height={30}
                width={30}
                className=""
              />
              <p>Upload Your Image</p>
            </label>
            <input id="file-upload" type="file" className="hidden" />

            <div className="py-2 space-y-2">
              <h4 className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px]">
                Description
              </h4>
              <p>
                We offer different services to turn your photos, ideas, or
                memories into beautiful artworks. You can choose digital
                painting and our artists will create your custom artworks with
                high quality and fast delivery. You can also customize and
                revise your artworks until you are happy.
              </p>
              <p>
                We offer different services to turn your photos, ideas, or
                memories into beautiful artworks. You can choose digital
                painting and our artists will create your custom artworks with
                high quality and fast delivery. You can also customize and
                revise your artworks until you are happy.
              </p>
            </div>
            <div className="py-2 space-y-2">
              <h4 className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px]">
                Additional information
              </h4>
              <div>
                {additionalInfo.map((info, index) => (
                  <div
                    className="flex bg-[#F0F0F0] gap-1 py-2 border border-b-gray-300 px-4"
                    key={index}
                  >
                    <p className="font-semibold">
                      {info.label}
                      {":"}
                    </p>
                    <p>{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#F0F0F0] py-[3%] px-[6%] my-[2%]">
          {shopSupport.map((items, index) => (
            <img
              key={index}
              src={items.img}
              alt="profile image"
              height={50}
              width={50}
              className=""
            />
          ))}
        </div>

        {/* Our Happy Customers  */}
        <div className="flex justify-center items-center text-[#000000] text-[16px] md:text-[26px] lg:text-[32px] font-bold">
          Our Happy Customers
        </div>
      </div>
      {/* Related Products */}
      <div className="bg-[#F0F0F0] py-[3%] px-[5%]">
        <h3 className="flex justify-center items-center text-[#000000] text-[16px] md:text-[26px] lg:text-[32px] font-bold pb-[3%]">
          Related Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {shoppingItems.map((items, index) => (
            <div
              key={index}
              className="border hover:border-[#0E2920] rounded-lg"
            >
              <div className="">
                <Link href={`/productInfo`}>
                  <div className="flex justify-center items-center">
                    <Image
                      src={items.img}
                      alt="profile image"
                      height={400}
                      width={400}
                      className="rounded-lg "
                    />
                  </div>
                  <div className="flex justify-between items-center py-3 px-2">
                    <p className="font-bold text-[#000000] text-[16px] md:text-[20px]">
                      {items.paintingType}
                    </p>
                    <button className="flex border hover:bg-[#0E2920] text-[#0E2920] hover:text-white border-[#0E2920] py-2 px-3 rounded-full">
                      <p>Starts at ₹</p>
                      <p>{items.price}</p>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
