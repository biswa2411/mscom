import { Footer, Header } from "@components/layout";

export default function NavigationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const menuId = "primary-search-account-menu";

  return (
    <section className="'h-screen w-screen flex flex-row">
      <div className="w-[30vw] bg-red-500"> hi</div>
      <div className="w-full h-[100vh]">{children} </div>
    </section>
  );
}