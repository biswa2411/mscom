"use client";

import React, { useState } from "react";
import Image from "next/image";

const Cart = () => {
  const customizeMemory = [
    {
      image: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "2",
    },
    {
      image: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "1",
    },
    {
      image: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "2",
    },
    {
      image: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "4",
    },
  ];

  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (

    <div className="flex px-[5%] py-[3%]">
      <div className="w-[70%] bg-white">
        {customizeMemory?.map((item, index) => (
          <div key={index} className="">
            <div className="grid grid-cols-1 md:grid-cols-3 mr-[30%] my-[3%] bg-white shadow-custom rounded-lg">
              <div className="flex justify-center items-center">
              <Image
                src={item?.image}
                width={200}
                height={200}
                alt="Image"
                className=" p-[2%]"
              />
              </div>
              <div className="p-[7%]  text-[16px] text-[#000000]">
                <h4 className="font-bold text-[20px]">
                  Customize Your Memory:
                </h4>
                <p>Type: {item?.type}</p>
                <p>Size: {item?.size}</p>
                <p>Variant: {item?.variant}</p>
                <p>Option: {item?.option}</p>
                <p>Person: {item?.person}</p>
                <p>{item?.price}</p>
              </div>
              <div className="flex flex-col justify-between relative">
                <div className="absolute top-8 right-8 cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2035_409)">
                      <path
                        d="M21 3.99999H17.9C17.6679 2.8714 17.0538 1.85734 16.1613 1.12871C15.2687 0.400082 14.1522 0.00144689 13 -7.62939e-06L11 -7.62939e-06C9.8478 0.00144689 8.73132 0.400082 7.83875 1.12871C6.94618 1.85734 6.3321 2.8714 6.1 3.99999H3C2.73478 3.99999 2.48043 4.10535 2.29289 4.29289C2.10536 4.48042 2 4.73478 2 4.99999C2 5.26521 2.10536 5.51956 2.29289 5.7071C2.48043 5.89464 2.73478 5.99999 3 5.99999H4V19C4.00159 20.3256 4.52888 21.5964 5.46622 22.5338C6.40356 23.4711 7.67441 23.9984 9 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V5.99999H21C21.2652 5.99999 21.5196 5.89464 21.7071 5.7071C21.8946 5.51956 22 5.26521 22 4.99999C22 4.73478 21.8946 4.48042 21.7071 4.29289C21.5196 4.10535 21.2652 3.99999 21 3.99999ZM11 1.99999H13C13.6203 2.00075 14.2251 2.19337 14.7316 2.55144C15.2381 2.9095 15.6214 3.41548 15.829 3.99999H8.171C8.37858 3.41548 8.7619 2.9095 9.26839 2.55144C9.77487 2.19337 10.3797 2.00075 11 1.99999ZM18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H9C8.20435 22 7.44129 21.6839 6.87868 21.1213C6.31607 20.5587 6 19.7956 6 19V5.99999H18V19Z"
                        fill="#374957"
                      />
                      <path
                        d="M10 17.9994C10.2652 17.9994 10.5196 17.894 10.7071 17.7065C10.8946 17.5189 11 17.2646 11 16.9994V10.9994C11 10.7342 10.8946 10.4798 10.7071 10.2923C10.5196 10.1047 10.2652 9.99937 10 9.99937C9.73478 9.99937 9.48043 10.1047 9.29289 10.2923C9.10536 10.4798 9 10.7342 9 10.9994V16.9994C9 17.2646 9.10536 17.5189 9.29289 17.7065C9.48043 17.894 9.73478 17.9994 10 17.9994Z"
                        fill="#374957"
                      />
                      <path
                        d="M14 17.9994C14.2652 17.9994 14.5196 17.894 14.7071 17.7065C14.8947 17.5189 15 17.2646 15 16.9994V10.9994C15 10.7342 14.8947 10.4798 14.7071 10.2923C14.5196 10.1047 14.2652 9.99937 14 9.99937C13.7348 9.99937 13.4804 10.1047 13.2929 10.2923C13.1054 10.4798 13 10.7342 13 10.9994V16.9994C13 17.2646 13.1054 17.5189 13.2929 17.7065C13.4804 17.894 13.7348 17.9994 14 17.9994Z"
                        fill="#374957"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2035_409">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="absolute flex bottom-6 right-8">
                  <button
                    className="border border-gray-400 px-[6px] py-[1px] rounded-tl-[4px] rounded-bl-[4px] text-[20px] "
                    onClick={decreaseCount}
                  >
                    -
                  </button>
                  <div className="border border-gray-400 px-[16px] py-[1px] text-[20px] ">
                    {item?.count}
                  </div>
                  <button
                    className="border border-gray-400 px-[6px] py-[1px] rounded-tr-[4px] rounded-br-[4px] text-[20px] "
                    onClick={increaseCount}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[30%] font-medium text-[16px] text-[#000000]">
        <h5 className="font-bold text-[24px]">Summary</h5>
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>{"2,323"}</div>
        </div>
        <div className="flex justify-between py-2">
          <div>Shipping</div>
          <div>{"free"}</div>
        </div>
        <div className="flex justify-between py-2">
          <div>Coupon</div>
          <div>{"NA"}</div>
        </div>
        <hr className="py-1"></hr>
        <div className="flex justify-between py-2 font-bold">
          <div>Total</div>
          <div>{"65,565"}</div>
        </div>
        <button className="justify-center items-center w-full bg-[#B88E2F] hover:bg-[#917b47] py-3 font-bold px-5 rounded-full text-white">Pay Now</button>
        <div className="flex pt-10">
          <input
            type="text"
            name="coupon"
            placeholder="Enter Coupon"
            // value={formData.firstName}
            // onChange={handleInputChange}
            className="border border-black pl-2 py-3 px-5 rounded-full mr-2"
          />
          <button className=" bg-[#B88E2F] hover:bg-[#917b47] font-bold py-3 px-5 rounded-full text-white">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
