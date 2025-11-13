import Header from "./components/header/Header";
import VideoHeader from "./components/premain/videoHeader";
import SeparateSection from "./components/section/SeparateSection";
import BlockContainerHome from "./components/section/BlockContainerHome";
import BaseGridContainer from "./components/section/BaseGridContainer";
export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Header/>
      <VideoHeader/>
      <SeparateSection/>
      <BlockContainerHome />
      <BaseGridContainer/>
      <BlockContainerHome />
    </div>
  );
}
