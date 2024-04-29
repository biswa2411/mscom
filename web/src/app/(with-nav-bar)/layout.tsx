import { Footer, Header } from "@components/layout";

export default function NavigationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const menuId = "primary-search-account-menu";

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      <div className="mt-[88px]">{children}</div>
      <Footer />
    </section>
  );
}
