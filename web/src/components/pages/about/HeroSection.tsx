import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex md:flex-row flex-col  px-20 h-[700px] bg-[#f8f8f8]">
      <div className="w-full md:w-2/3 pr-20 flex flex-col justify-center text-start gap-10">
        <div className="w-full  [font-family:'Poppins-SemiBoldItalic',Helvetica] font-semibold italic text-[#0e2920] text-3xl  tracking-[0] leading-[normal]">
          ABOUT US
        </div>
        <p className="w-full [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[68px] tracking-[0] leading-[normal]">
          Welcome to MS Art Life, your gateway to a world of captivating and
          customized artworks!
        </p>
        <p className="w-full  [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0e2920] text-3xl tracking-[0] leading-[normal]">
          Your online source for unique digital paintings. Transform your space
          with our curated collection.
        </p>
      </div>
      <div className="w-full md:w-1/3 items-end flex ">
        <Image
         
          height={660}
          width={593}
          alt="Rectangle"
          src="/swayampadhi.png"
        />
      </div>
    </div>
  );
};
