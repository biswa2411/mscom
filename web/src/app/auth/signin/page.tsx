// import { GoogleLoginColorLightStateSignUpPillTrue } from "../GoogleLoginColorLightStateSignUpPillTrue/GoogleLoginColorLightStateSignUpPillTrue";
// import { AppleIdLoginColorWhiteTypeSignInIconOnlyFalse } from "../AppleIdLoginColorWhiteTypeSignInIconOnlyFalse/AppleIdLoginColorWhiteTypeSignInIconOnlyFalse";

export interface ISignInPageProps {
  className?: string;
}

const SignInPage = ({ className, ...props }: ISignInPageProps): JSX.Element => {
  return (
    <>
      {" "}
      <div className="text-[#fff3e3] text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold absolute left-[calc(50%_-_462px)] top-[340px]">
        Welcome Back{" "}
      </div>
      <div className="bg-[#1e342c] rounded-[40px] p-2 flex flex-row gap-4 items-start justify-start w-[454px] absolute left-[calc(50%_-_585px)] top-[calc(50%_-_106.5px)] overflow-hidden">
        <div className="bg-[#fff3e3] rounded-[40px] border-solid border-[#fff3e3] border pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center flex-1 relative overflow-hidden">
          <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold relative">
            Sign In{" "}
          </div>
        </div>
        <div className="rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center flex-1 relative overflow-hidden">
          <div className="text-[#fff3e3] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold relative">
            Signup{" "}
          </div>
        </div>
      </div>
      <div
        className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start w-[454px] absolute left-[135px] top-[calc(50%_-_6px)] overflow-hidden"
        style={{ opacity: "0.6000000238418579" }}
      >
        <div className="text-[#fff3e3] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal relative">
          Email address or Phone No.{" "}
        </div>
      </div>
      <div
        className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start w-[454px] absolute left-[135px] top-[calc(50%_-_-68px)] overflow-hidden"
        style={{ opacity: "0.6000000238418579" }}
      >
        <div className="text-[#fff3e3] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal relative">
          Password{" "}
        </div>
      </div>
      <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal absolute left-[483px] top-[646px]">
        Forget Password?{" "}
      </div>
      <div className="bg-[#fff3e3] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-[454px] h-14 absolute left-[calc(50%_-_585px)] top-[688px] overflow-hidden">
        <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
          Sign in{" "}
        </div>
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
    </>
  );
};

export default SignInPage;
