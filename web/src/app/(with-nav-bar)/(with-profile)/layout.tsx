import { Footer, Header } from "@components/layout";
import Image from "next/image";
import Link from "next/link";

export default function NavigationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const menuId = "primary-search-account-menu";

  const profile_sidebar = [{ icon: "/profileIcon.svg", link: "/profile", Title: "Profile" }, { icon: "/ordersIcon.svg", link: "/order", Title: "Orders" }, { icon: "/helpIcon.svg", link: "/support", Title: "Help & Support" }]

  return (
    <section className="'h-screen w-screen flex flex-row">
      <div className="w-[30vw] flex items-start justify-center">
        <div className=" flex flex-col gap-5 justify-center items-center py-[10%] bg-white w-4/5 m-10  shadow-custom rounded-xl">
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
          <div className="text-primary font-bold text-[16px] md:text-[24px]">
            John Perry
          </div>
          <ul className="w-full">
            {profile_sidebar.map(({ link, icon, Title }, key) => (
              <li key={key} className="mb-5 w-full px-5 py-2 hover:border-l-4 border-primary">
                <Link
                  href={link}
                  className="hover:text-primary font-semibold text-[20px] text-gray-300 flex gap-3 "
                >
                  <Image
                    src={icon}
                    alt="profile image"
                    height={30}
                    width={30}
                    className="flex justify-center items-center"
                  />
                  {Title}                </Link>
              </li>
            ))}
            <li className="mb-5 w-full px-5 py-2 hover:border-l-4 border-primary hover:cursor-pointerx">
              <div

                className="hover:text-primary font-semibold text-[20px] text-gray-300 flex gap-3 "
              >
                <Image
                  src="/signOutIcon.svg"
                  alt="profile image"
                  height={30}
                  width={30}
                  className="flex justify-center items-center"
                />
                Log Out
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[100vh]">{children} </div>
    </section>
  );
}
