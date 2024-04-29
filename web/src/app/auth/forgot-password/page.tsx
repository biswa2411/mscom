export interface IForgetPasswordProps {
  className?: string;
}
const ForgetPassword = ({
  className,
  ...props
}: IForgetPasswordProps): JSX.Element => {
  return (

    <>
      <div className="text-[#fff3e3] text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold absolute left-[calc(50%_-_493px)] top-[470px]">
        Trouble logging in?{" "}
      </div>
      <div
        className="bg-[#2f463e] rounded-lg border-solid border-[#fff3e3] border p-4 flex flex-row gap-2 items-center justify-start w-[454px] absolute left-[135px] top-[calc(50%_-_-96px)] overflow-hidden"
        style={{ opacity: "0.6000000238418579" }}
      >
        <div className="text-[#fff3e3] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal relative">
          Email address or Phone No.{" "}
        </div>
      </div>
      <div className="bg-[#fff3e3] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-[454px] h-14 absolute left-[calc(50%_-_585px)] top-[690px] overflow-hidden">
        <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
          Send OTP{" "}
        </div>
      </div>

      <div className="text-[#fff3e3] text-center font-['Poppins-Medium',_sans-serif] text-base font-medium absolute left-[135px] top-[528px] w-[454px]">
          Enter your email, phone, or username and we&#039;ll send you a link to
          get back into your account.{" "}
        </div>
    </>
  );
};

export default ForgetPassword;
