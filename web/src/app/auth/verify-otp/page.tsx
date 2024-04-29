export interface IOtpVerificationProps {
    className?: string;
  }
  
 const OtpVerification = ({
    className,
    ...props
  }: IOtpVerificationProps): JSX.Element => {
    return (
   
      <>
         <div className="text-[#fff3e3] text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold absolute left-[calc(50%_-_495px)] top-[454px]">
            Just one more step{" "}
          </div>
          <div className="flex flex-row gap-4 items-center justify-center absolute left-[172px] top-[568px]">
            <div
              className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[50px] h-[50px] relative overflow-hidden"
              style={{ opacity: "0.6000000238418579" }}
            ></div>
            <div
              className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[50px] h-[50px] relative overflow-hidden"
              style={{ opacity: "0.6000000238418579" }}
            ></div>
            <div
              className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[50px] h-[50px] relative overflow-hidden"
              style={{ opacity: "0.6000000238418579" }}
            ></div>
            <div
              className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[50px] h-[50px] relative overflow-hidden"
              style={{ opacity: "0.6000000238418579" }}
            ></div>
            <div
              className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[50px] h-[50px] relative overflow-hidden"
              style={{ opacity: "0.6000000238418579" }}
            ></div>
            <div
              className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[50px] h-[50px] relative overflow-hidden"
              style={{ opacity: "0.6000000238418579" }}
            ></div>
          </div>
          <div className="bg-[#fff3e3] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-[454px] h-14 absolute left-[calc(50%_-_585px)] top-[658px] overflow-hidden">
            <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
              Confirm{" "}
            </div>
          </div>
          <div className="text-[#fff3e3] text-center font-['Poppins-Medium',_sans-serif] text-base font-medium absolute left-[155px] top-[512px]">
            Enter the 6-digit code we sent to: xxxxx@gmail.com{" "}
          </div>
          <div className="text-[#fff3e3] text-center font-['Poppins-Medium',_sans-serif] text-base font-medium absolute left-[269px] top-[738px]">
            Resend OTP in 2:00 min{" "}
          </div>
          </>
    );
  };
  

  export default  OtpVerification