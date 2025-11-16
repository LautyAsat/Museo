import Header from "@/layout/header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <Header />
      <main>{children}</main>
    </div>
  );
}
