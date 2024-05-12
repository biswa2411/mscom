import Image from "next/image";
import React from "react";

export const Team = () => {
  return (
    <div className=" my-20 bg-[#efefef] flex flex-col items-center gap-20 justify-center">
      <p className=" bg-gradient-to-b bg-clip-text text-transparent from-primary to-gray-500 mt-20 [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#0e2920] text-[48px] ">
        The Executive Team
      </p>
      <div className="flex flex-row w-full justify-center gap-10">
        <Image height={348} width={302} src={"/member1.png"} alt="member1" />
        <Image height={348} width={302} src={"/member2.png"} alt="member2" />
        <Image height={348} width={302} src={"/member3.png"} alt="member3" />
        <Image height={348} width={302} src={"/member4.png"} alt="member4" />
      </div>

    </div>
  );
};
