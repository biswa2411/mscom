"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Shop = () => {
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
    <div className="p-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {shoppingItems.map((items, index) => (
          <div key={index} className="border hover:border-[#0E2920] rounded-lg">
            <div className="">
            <Link href={`/productInfo`}>
              <Image
                src={items.img}
                alt="profile image"
                height={400}
                width={400}
                className="rounded-lg"
              />
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
  );
};

export default Shop;
