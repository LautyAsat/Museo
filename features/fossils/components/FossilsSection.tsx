"use client";

import ExpandableCards, { AccordionItem } from "@/components/ExpandableCards";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Subtitle from "@/components/subtitle";

import { Specie } from "@/features/collections/types/Species";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "http://localhost:3001";
const API_FOSSILS_URL = "http://localhost:3001/fossils";

export default function FossilsSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fossils"],
    queryFn: async () => {
      const response = await fetch(API_FOSSILS_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Cargando a los gigantes...</div>;
  }

  if (isError) {
    return <div>Error en la bd pa.</div>;
  }

  const accordionItems: AccordionItem[] = data
    ? data.map((fossil: Specie) => {
        const frontImage =
          fossil.images.find((img) => img.isFront)?.url ||
          `${API_BASE_URL}/uploads/not-found.png`;

        return {
          id: fossil._id,
          title: fossil.name,
          imageSrc: `${API_BASE_URL}/${frontImage}`,
        };
      })
    : [];

  return (
    <Section className="w-full">
      <Subtitle className="">#Camina Entre los Gigantes del Pasado</Subtitle>
      <Paragraph>
        Descubre los vestigios de las criaturas colosales que dominaron estas
        llanuras mucho antes que nosotros.
      </Paragraph>
      <ExpandableCards className="mt-10" items={accordionItems} />
    </Section>
  );
}
