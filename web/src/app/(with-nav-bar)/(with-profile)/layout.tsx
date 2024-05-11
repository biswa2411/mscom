import { Footer, Header } from "@components/layout";
import Image from "next/image";

export default function NavigationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const menuId = "primary-search-account-menu";

  return (
    <section className="'h-screen w-screen flex flex-row">
      <div className="w-[30vw] bg-gray-100 ">
        <div className=" flex flex-col gap-5 justify-center items-center py-[10%]">
          <div className="relative">
            <Image
              src={
                "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph"
              }
              alt="profile image"
              height={150}
              width={150}
              className="rounded-full shadow-lg"
            />
            <button className="absolute -bottom-2 -right-2 hover:shadow-sm">
              <Image
                src="/cameraIcon.svg"
                alt="profile image"
                height={50}
                width={50}
                className="rounded-full"
              />
            </button>
          </div>
          <div className="text-[#0E2920] font-bold text-[16px] md:text-[24px]">
            John Perry
          </div>
          <ul>
            <li className="mb-2 ">
              <a
                href="/profile"
                className="hover:text-[#0E2920] font-semibold text-[20px] text-gray-300 flex gap-3"
              >
                <Image
                  src="/profileIcon.svg"
                  alt="profile image"
                  height={30}
                  width={30}
                  className="flex justify-center items-center"
                />
                Profile
              </a>
            </li>
            <li className="mb-2 ">
              <a
                href="/order"
                className="hover:text-[#0E2920] font-semibold text-[20px] text-gray-300 flex gap-3"
              >
                <Image
                  src="/ordersIcon.svg"
                  alt="profile image"
                  height={30}
                  width={30}
                  className="flex justify-center items-center"
                />
                Orders
              </a>
            </li>
            <li className="mb-2 ">
              <a
                href="support"
                className="hover:text-[#0E2920] font-semibold text-[20px] text-gray-300 flex gap-3"
              >
                <Image
                  src="/helpIcon.svg"
                  alt="profile image"
                  height={30}
                  width={30}
                  className="flex justify-center items-center"
                />
                Help & Support
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-[#0E2920] font-semibold text-[20px] text-gray-300 flex gap-3"
              >
                <Image
                  src="/signOutIcon.svg"
                  alt="profile image"
                  height={30}
                  width={30}
                  className="flex justify-center items-center"
                />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[100vh]">{children} </div>
    </section>
  );
}
