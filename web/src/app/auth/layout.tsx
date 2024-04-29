import Image from "next/image";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={" h-[1024px] relative overflow-hidden " }>
      <div className="bg-[#0e2920] w-[1440px] h-[1024px] absolute left-0 top-0 overflow-hidden">
        <img
          className="w-[175px] h-[175px] absolute left-[calc(50%_-_446px)] top-[calc(50%_-_363px)]"
          style={{ objectFit: "cover" }}
          src="/logo.svg"
        />

        <Image src={'logo.svg'} alt="logo" width={175} height={175}/>
        {children}
        <img
          className="rounded-[32px] w-[656px] h-[904px] absolute left-[724px] top-[60px]"
          style={{ objectFit: "cover" }}
          src={'/images.jpeg'}
        />
        {/* <Image src={'/images.jpeg'} alt="logo" width={656} height={904}/> */}
        <div className="flex flex-row gap-8 items-start justify-start absolute left-[804px] top-[852px]">
          <img
            className="rounded-[32px] shrink-0 w-8 h-8 relative overflow-visible"
            style={{ opacity: "0.75" }}
            src="/logo.svg"
          />
          <img
            className="rounded-[32px] shrink-0 w-8 h-8 relative overflow-visible"
            style={{ transform: "translate(-32px, -32px)" }}
            src="/logo.svg"
          />
        </div>
        <div className="flex flex-row gap-2 items-center justify-start w-[454px] absolute left-[135px] top-[776px]">
          <div
            className="border-solid border-[#fff3e3] border-t border-r-[0] border-b-[0] border-l-[0] flex-1 h-0 relative"
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          ></div>
          <div className="text-[#fff3e3] text-left font-['Montserrat-Regular',_sans-serif] text-lg leading-5 font-normal relative">
            or{" "}
          </div>
          <div
            className="border-solid border-[#fff3e3] border-t border-r-[0] border-b-[0] border-l-[0] flex-1 h-0 relative"
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          ></div>
        </div>
        <div className="flex flex-row items-center justify-between w-[454px] absolute left-[135px] top-[828px]">
          {/* <GoogleLoginColorLightStateSignUpPillTrue
        state="sign-up"
        pill="true"
        className="!border-[#bfbfbf] !justify-center !shrink-0 !w-[210px] !h-12"
      ></GoogleLoginColorLightStateSignUpPillTrue>
      <AppleIdLoginColorWhiteTypeSignInIconOnlyFalse
        color="white"
        className="!rounded-[40px] !border-[#bfbfbf] !shrink-0 !w-[210px] !h-12"
      ></AppleIdLoginColorWhiteTypeSignInIconOnlyFalse> */}
        </div>
      </div>
    </div>
  );
}
