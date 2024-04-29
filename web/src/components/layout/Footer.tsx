'use client'
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image";

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-primary text-ms_text h-[414px] relative overflow-hidden  flex flex-col justify-center items-center">
      <div className=" h-[338px]   top-10 overflow-hidden">
        <div className="flex flex-col gap-20 items-center justify-start  left-[calc(50%_-_640px)] top-0 overflow-hidden">
          <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative overflow-hidden">
            <div className="flex flex-col gap-[25px] items-start justify-start shrink-0 w-[295px] relative overflow-hidden">
              <Image
                className="shrink-0  relative"
                height={100}
                width={100}
                alt="logo"
                objectFit="cover"
                src="/logo.svg"
              />
              <div className=" text-left  text-sm leading-5 font-normal relative">
                Plot No.99/507, Chinmayee Nivas, Road No.12,
                <br />
                Mahaveer Nagar, Samantrapur,
                <br />
                Bhubaneswar, Odisha, 751002{" "}
              </div>
              <div className="flex flex-row gap-5 items-center justify-center shrink-0 relative overflow-hidden text-ms_white">
                <div className="shrink-0 w-6 h-6 relative overflow-hidden">
                  <Facebook />
                </div>
                <div className="shrink-0 w-6 h-6 relative overflow-hidden">
                  <Instagram />
                </div>
                <div className="shrink-0 w-6 h-[19.76px] relative overflow-hidden">
                  <Twitter />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[241px] relative overflow-hidden">
              <div className="text-[#b88e2f] text-left font-['Poppins-Bold',_sans-serif] text-2xl leading-8 font-bold relative">
                Links{" "}
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  Home{" "}
                </div>
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  Shop{" "}
                </div>
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  About{" "}
                </div>
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  Contact us{" "}
                </div>
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  Find us at Google Maps{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-60 relative overflow-hidden">
              <div className="text-[#b88e2f] text-left font-['Poppins-Bold',_sans-serif] text-2xl leading-8 font-bold relative">
                Help{" "}
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  Payment Policy{" "}
                </div>
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  Privacy Policy{" "}
                </div>
                <div className=" text-left  text-sm leading-6 font-semibold relative">
                  Terms of Service{" "}
                </div>
                <div className=" text-left  text-sm leading-6 font-semibold relative self-stretch">
                  Cancellation, Refund and Returns Policy{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-60 relative overflow-hidden">
              <div className="text-[#b88e2f] text-left font-['Poppins-Bold',_sans-serif] text-2xl leading-8 font-bold relative">
                Newsletter{" "}
              </div>
              <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                <div className="bg-[#1e342c] rounded-[32px] pr-4 pl-4 flex flex-col gap-0 items-start justify-center self-stretch shrink-0 h-8 relative">
                  <div className="text-[#ffffff] text-left  text-xs font-normal relative">
                    Email Address*{" "}
                  </div>
                </div>
                <div className="rounded-[32px] border-solid border-[#fff3e3] border pt-1.5 pr-3 pb-1.5 pl-3 flex flex-col gap-0 items-start justify-center shrink-0 relative">
                  <div className="text-[#fff3e3] text-left font-['Poppins-Medium',_sans-serif] text-[10px] font-medium relative">
                    Subscribe{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-light-text-color text-left  text-sm leading-6 font-medium  text-white">
        copyright ©2024 MsArtLife{" "}
      </div>
    </div>
  );
};
