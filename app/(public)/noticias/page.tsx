import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Separator from "@/components/Separator";
import Subtitle from "@/components/subtitle";
import AllNewsGrid from "@/features/news/components/AllNewsGrid";
import BaseGridContainer from "@/features/news/components/BaseGridContainer";

export default function page() {
  return (
    <main className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto my-20">
      <Subtitle className="text-own-black">#ATENCIÓN</Subtitle>
      <Paragraph>
        Lo último en noticias del museo{" "}
        <span className="font-bold">#museo</span>
      </Paragraph>
      <Section className="py-0 my-10">
        <BaseGridContainer />
      </Section>
      <Separator />
      <Subtitle className="text-own-black mt-10">Otras Noticias</Subtitle>
      <Section className="py-0 my-10">
        <AllNewsGrid />
      </Section>
    </main>
  );
}
