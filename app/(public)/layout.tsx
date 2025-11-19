import Footer from "@/layout/footer/Footer";
import Header from "@/layout/header/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
