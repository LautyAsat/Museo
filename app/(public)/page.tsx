import VideoHeader from "../../layout/premain/videoHeader";
import CollectionsSection from "../../features/collections/components/CollectionsSection";
import FossilsSection from "../../features/fossils/components/FossilsSection";
import NewsSection from "../../features/news/components/NewsSection";
import ReelsSection from "../../features/reels/components/ReelsSection";

export default function Page() {
  return (
    <>
      <VideoHeader />
      <main className="mt-10 mb-20">
        <div className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto">
          <NewsSection />
        </div>
        <div className="bg-[#181818] px-4 md:px-10 lg:px-20 w-full">
          <ReelsSection />
        </div>
        <div className="bg-[#181818] px-4 md:px-10 lg:px-20 2xl:px-0 w-full pb-10">
          <div className="max-w-[1440px] mx-auto">
            <CollectionsSection />
          </div>
        </div>
        <div className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto">
          <FossilsSection />
        </div>
      </main>
    </>
  );
}
