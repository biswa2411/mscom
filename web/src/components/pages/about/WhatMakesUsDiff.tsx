import Image from "next/image";
import React from "react";

export const WhatMakesUsDiff = () => {
  return (
    <div className="relative justify-center my-10 ">
      <div className=" [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[48px] text-center tracking-[0] leading-[normal]">
        WHAT MAKES US DIFFERENT?
      </div>
      <div className="grid grid-cols-2  my-20">
        <div className="flex justify-center items-center">
          <div className="relative ">
            <p className="[font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[32px] tracking-[0] leading-[normal]">
              Handmade with Love, just for you.
            </p>
            <p className=" w-[519px] top-[58px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0e2920] text-[16px] text-justify tracking-[0] leading-[normal]">
              Our digital art is a labor of love, crafted with passion and
              devotion. Like traditional artists, our team pours heart and soul
              into each piece, creating a masterpiece that blends artistry and
              technology. Each artwork is a unique fusion of creativity, making it
              truly special. Feel the emotions and experience the magic behind our
              handcrafted digital art.
            </p>
          </div>
        </div>
        <Image
          width={719}
          height={472}
          alt="Rectangle1"
          src="/frame1.png"
        />


      <div className="flex justify-end items-start">
      <Image
          width={719}
          height={472}
          alt="Rectangle2"
          src="/frame2.png"
        />
      </div>
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="[font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[32px] tracking-[0] leading-[normal]">
              Our Artisans
            </div>
            <p className=" w-[519px] top-[58px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0e2920] text-[16px] text-justify tracking-[0] leading-[normal]">
              Meet our gifted artisans, the heart of our company, breathing life
              into digital art. With a deep grasp of traditional techniques and
              adeptness in modern digital tools, our talented team creates
              stunning masterpieces. Each brushstroke, texture, and detail is
              thoughtfully crafted, evoking emotions and exuding excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
