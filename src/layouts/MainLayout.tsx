import Header from "../components/header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background font-sans ">
      <Header />
      <main>{children}</main>
    </div>
  );
}
