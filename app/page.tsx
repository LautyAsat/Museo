import Header from "./components/header/Header";
import NewsSection from "./components/main/news/NewsSection";
import VideoHeader from "./components/premain/videoHeader";
export default function Home() {
  return (
    <div className="bg-background font-sans ">
      <Header/>
      <VideoHeader/>
      <main className="mt-10 mb-20 px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <NewsSection />
      </main>
    </div>
  );
}