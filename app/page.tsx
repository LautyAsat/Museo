import CollectionsSection from "./features/collections/components/CollectionsSection";
import FossilsSection from "./features/fossils/components/FossilsSection";
import NewsSection from "./features/news/components/NewsSection";
import Header from "./layout/header/Header";
import VideoHeader from "./layout/premain/videoHeader";

export default function Home() {
  return (
    <div className="bg-background font-sans ">
      <Header />
      <VideoHeader />
      <main className="mt-10 mb-20 px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <NewsSection />
        <CollectionsSection />
        <FossilsSection />
      </main>
    </div>
  );
}
