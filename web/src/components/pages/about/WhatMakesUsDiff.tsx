import Image from "next/image";
import React from "react";

export const WhatMakesUsDiff = () => {
  return (
    <div className="relative h-[1206px]">
      <div className="absolute top-[78px] left-[378px] [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[48px] text-center tracking-[0] leading-[normal]">
        WHAT MAKES US DIFFERENT?
      </div>
      <Image
        className=" top-[182px] left-[721px] absolute object-cover"
        width={719}
        height={472}
        alt="Rectangle1"
        src="/frame1.png"
      />
      <Image
        className="top-[654px] left-0 absolute  object-cover"
        width={719}
        height={472}
        alt="Rectangle2"
        src="/frame2.png"
      />
      <div className="absolute w-[519px] h-[202px] top-[317px] left-[80px]">
        <div className="relative w-[523px] h-[202px]">
          <p className="absolute top-0 left-0 [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[32px] tracking-[0] leading-[normal]">
            Handmade with Love, just for you.
          </p>
          <p className="absolute w-[519px] top-[58px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0e2920] text-[16px] text-justify tracking-[0] leading-[normal]">
            Our digital art is a labor of love, crafted with passion and
            devotion. Like traditional artists, our team pours heart and soul
            into each piece, creating a masterpiece that blends artistry and
            technology. Each artwork is a unique fusion of creativity, making it
            truly special. Feel the emotions and experience the magic behind our
            handcrafted digital art.
          </p>
        </div>
      </div>
      <div className="absolute w-[519px] h-[202px] top-[789px] left-[841px]">
        <div className="relative w-[523px] h-[202px]">
          <div className="absolute top-0 left-0 [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[32px] tracking-[0] leading-[normal]">
            Our Artisans
          </div>
          <p className="absolute w-[519px] top-[58px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0e2920] text-[16px] text-justify tracking-[0] leading-[normal]">
            Meet our gifted artisans, the heart of our company, breathing life
            into digital art. With a deep grasp of traditional techniques and
            adeptness in modern digital tools, our talented team creates
            stunning masterpieces. Each brushstroke, texture, and detail is
            thoughtfully crafted, evoking emotions and exuding excellence.
          </p>
        </div>
      </div>
    </div>
  );
};
