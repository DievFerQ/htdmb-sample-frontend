import AnimatedScrollComponent from "@/components/Animation";
import BookSectionEn from "@/components/BookSectionEn";
import Hero from "@/components/Hero";
import TextEffectComponent from "@/components/Quote";
import TextEffectComponent2 from "@/components/Quote2";
import VideoSection from "@/components/VideoSection";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />
      <TextEffectComponent2 />
      <AnimatedScrollComponent />
      <VideoSection />
      <TextEffectComponent />
      <BookSectionEn />
    </div>
  );
};
