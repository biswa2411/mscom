import Image from "next/image";
import React from "react";

export const OurStory = () => {
  return (
    <div className="  flex flex-col justify-center items-center bg-[#0e2920] pt-10">
       <div className="flex w-[90vw] items-center justify-center gap-[24px] p-[40px] top-[80px] left-[80px] bg-[#1e342c] rounded-[24px] overflow-hidden flex-col  my-10">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#fff3e3] text-[48px] text-center tracking-[0] leading-[normal]">
          Our Story
        </div>
        <p className=" self-stretch [font-family:'Poppins-Medium',Helvetica] font-medium text-[#fff3e3] text-[16px] text-center tracking-[0] leading-[normal]">
          Founded in November 2022 by a trio of visionary creators – Subham
          Sahoo (Chief Executive Officer), Manash Ranjan Sahoo (Chief Design
          Officer), and Devi Sarthak Swain (Chief Growth Officer) – MS Art Life
          began as a spark of inspiration in the vibrant city of Hyderabad,
          India. Once, a friend’s birthday was just around the corner, and
          Subham was on the hunt for a unique gift. Amidst the search, destiny
          intervened, and he stumbled upon his uncle, Manash, passionately
          crafting a digital portrait of a girl.
        </p>
      </div>
     <div className=" relative flex flex-row  w-full  h-[500px] mt-40"> 
     <Image
        className="absolute z-10 bottom-0 left-0"
        width={800}
        height={480}
        alt="Rectangle"
        src="/ourstory.png"
      />
     <div  className="absolute z-10 top-0 left-1/2   ">
     <div className="  h-[154px] top-[448px] left-[756px]">
        <div className=" top-0 left-0 [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#fff3e3] text-[32px] tracking-[0] leading-[normal]">
          VISION
        </div>
        <p className=" w-[519px] top-[58px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#fff3e3] text-[16px] text-justify tracking-[0] leading-[normal]">
          To inspire creativity and create incredible digital art through the
          perfect blend of traditional craftsmanship and modern technology. We
          envision being recognized for our innovative and high-resolution art,
          custom-made for every individual.
        </p>
      </div>
      <div className=" w-[521px] h-[242px] top-[634px] left-[756px]">
        <div className=" top-0 left-0 [font-family:'Instagram_Sans-Bold',Helvetica] font-bold text-[#fff3e3] text-[32px] tracking-[0] leading-[normal]">
          CORE VALUE
        </div>
        <div className="inline-flex items-start gap-[8px] top-[58px] left-0 flex-col ">
          <div className="relative w-[521px] h-[48px] mr-[-2.00px]">
            <p className="absolute w-[496px] top-0 left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#fff3e3] text-[16px] tracking-[0] leading-[normal]">
              Happy Customers: We work hard to make you happy, providing a
              smooth and enjoyable shopping experience.
            </p>
            <div className="absolute w-[8px] h-[8px] top-[8px] left-0 bg-[#fff3e3] rounded-[4px]" />
          </div>
          <div className=" relative w-[521px] h-[72px] mr-[-2.00px]">
            <p className="absolute w-[496px] top-0 left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#fff3e3] text-[16px] tracking-[0] leading-[normal]">
              Personal Connection: Every creation embodies a personal touch,
              forging an emotional bond between the art and its admirer.
            </p>
            <div className=" absolute w-[8px] h-[8px] top-[8px] left-0 bg-[#fff3e3] rounded-[4px]" />
          </div>
          <div className="relative w-[521px] h-[48px] mr-[-2.00px]">
            <p className="absolute w-[496px] top-0 left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#fff3e3] text-[16px] tracking-[0] leading-[normal]">
              Be Creative: We love imagination and creating amazing digital
              artworks that capture your imagination.
            </p>
            <div className="absolute w-[8px] h-[8px] top-[8px] left-0 bg-[#fff3e3] rounded-[4px]" />
          </div>
        </div>
      </div>
     
     </div>
     </div>
    </div>
  );
};
