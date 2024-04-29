// import { GoogleLoginColorLightStateSignUpPillTrue } from "../GoogleLoginColorLightStateSignUpPillTrue/GoogleLoginColorLightStateSignUpPillTrue";
// import { AppleIdLoginColorWhiteTypeSignInIconOnlyFalse } from "../AppleIdLoginColorWhiteTypeSignInIconOnlyFalse/AppleIdLoginColorWhiteTypeSignInIconOnlyFalse";
// import { CheckboxBaseActiveFalse } from "../CheckboxBaseActiveFalse/CheckboxBaseActiveFalse";

export interface ISignupPageProps {
  className?: string;
}

 const SignupPage = ({
  className,
  ...props
}: ISignupPageProps): JSX.Element => {
  return (
  


<>
<div className="text-[#fff3e3] text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold absolute left-[calc(50%_-_473px)] top-[315px]">
          Create Account{" "}
        </div>
        <div className="bg-[#1e342c] rounded-[40px] p-2 flex flex-row gap-4 items-start justify-start w-[454px] absolute left-[calc(50%_-_585px)] top-[calc(50%_-_131.5px)] overflow-hidden">
          <div className="rounded-[40px] border-solid border-[transparent] border pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center flex-1 relative overflow-hidden">
            <div className="text-[#fff3e3] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold relative">
              Sign In{" "}
            </div>
          </div>
          <div className="bg-[#fff3e3] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center flex-1 relative overflow-hidden">
            <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold relative">
              Signup{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start absolute left-[135px] top-[481px]">
          <div
            className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[454px] relative overflow-hidden"
            style={{ opacity: "0.6000000238418579" }}
          >
            <div className="text-[#fff3e3] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal relative">
              Enter Email address or Phone No.{" "}
            </div>
          </div>
          <div
            className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[454px] relative overflow-hidden"
            style={{ opacity: "0.6000000238418579" }}
          >
            <div className="text-[#fff3e3] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal relative">
              Password{" "}
            </div>
          </div>
        </div>
        <div className="bg-[#fff3e3] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-[454px] h-14 absolute left-[calc(50%_-_585px)] top-[713px] overflow-hidden">
          <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
            Sign up{" "}
          </div>
        </div>
        
        <div className="flex flex-row gap-4 items-start justify-start w-[454px] absolute left-[135px] top-[637px]">
          {/* <CheckboxBaseActiveFalse className="undefined"></CheckboxBaseActiveFalse> */}
          <div className="text-[#fff3e3] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal relative flex-1">
            <span>
              <span className="by-signing-up-you-agree-to-our-terms-privacy-policy-and-cookies-policy-span">
                By signing up, you agree to our{" "}
              </span>
              <span className="by-signing-up-you-agree-to-our-terms-privacy-policy-and-cookies-policy-span2">
                Terms
              </span>
              <span className="by-signing-up-you-agree-to-our-terms-privacy-policy-and-cookies-policy-span3">
                {" "}
                ,{" "}
              </span>
              <span className="by-signing-up-you-agree-to-our-terms-privacy-policy-and-cookies-policy-span4">
                Privacy Policy
              </span>
              <span className="by-signing-up-you-agree-to-our-terms-privacy-policy-and-cookies-policy-span5">
                {" "}
                and{" "}
              </span>
              <span className="by-signing-up-you-agree-to-our-terms-privacy-policy-and-cookies-policy-span6">
                Cookies Policy
              </span>
              <span className="by-signing-up-you-agree-to-our-terms-privacy-policy-and-cookies-policy-span7">
                {" "}
                .
              </span>
            </span>{" "}
          </div>
        </div></>
  );
};


export default SignupPage