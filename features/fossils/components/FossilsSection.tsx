"use client";

import ExpandableCards, { AccordionItem } from "@/components/ExpandableCards";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Subtitle from "@/components/subtitle";

import { useQuery } from "@tanstack/react-query";
import { Fossil } from "../types/Fossil";
import { API_ENDPOINTS, BASE_API_URL } from "@/utils/constants";

const API_FOSSILS_URL = API_ENDPOINTS.FOSSILS;

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
    ? data.map((fossil: Fossil) => {
        const frontImage =
          fossil.images.find((img) => img.isFront)?.url ||
          `${BASE_API_URL}/uploads/not-found.png`;

        return {
          id: fossil._id,
          title: fossil.name,
          imageSrc: `${BASE_API_URL}/${frontImage}`,
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
