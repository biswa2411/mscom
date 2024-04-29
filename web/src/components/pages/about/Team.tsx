import React from "react";

export const Team = () => {
  return (
    <div className="relative  h-[610px] bg-[#efefef]">
      <p className="absolute bg-gradient-to-b bg-clip-text text-transparent from-primary to-gray-500 top-[79px] left-[506px] [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[48px] text-center tracking-[0] leading-[normal]">
        The Executive Team
      </p>
      <div className="left-[80px] bg-[url(/member1.png)] absolute w-[302px] h-[348px] top-[182px] rounded-[8px] bg-cover bg-[50%_50%]" />
      <div className="left-[406px] bg-[url(/member2.png)] absolute w-[302px] h-[348px] top-[182px] rounded-[8px] bg-cover bg-[50%_50%]" />
      <div className="left-[732px] bg-[url(/member3.png)] absolute w-[302px] h-[348px] top-[182px] rounded-[8px] bg-cover bg-[50%_50%]" />
      <div className="left-[1058px] bg-[url(/member4.png)] absolute w-[302px] h-[348px] top-[182px] rounded-[8px] bg-cover bg-[50%_50%]" />
    </div>
  );
};
