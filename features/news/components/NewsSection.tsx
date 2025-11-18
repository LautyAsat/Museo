import Subtitle from "@/components/subtitle";
import BaseGridContainer from "./BaseGridContainer";
import Section from "@/components/Section";
import { Suspense } from "react";
import NewsGridSkeleton from "./NewsGridSkeleton";

export default function NewsSection() {
  return (
    <Section>
      <Subtitle>#ATENCIÓN</Subtitle>
      <Suspense fallback={<NewsGridSkeleton />}>
        <BaseGridContainer />
      </Suspense>
    </Section>
  );
}
