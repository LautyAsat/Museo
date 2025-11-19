"use client";

import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Subtitle from "@/components/subtitle";
import { Specie } from "@/features/collections/types/Species";
import { API_ENDPOINTS, BASE_API_URL } from "@/utils/constants";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";

export default function page() {
  const { name }: { name: string } = useParams();
  const searchParams = useSearchParams();
  const decodedName = decodeURIComponent(name);
  const { data } = useSuspenseQuery<Specie>({
    queryKey: ["specie", decodedName],
    queryFn: async () => {
      const endpoint =
        searchParams.get("type") === "fossil"
          ? API_ENDPOINTS.FOSSILS
          : API_ENDPOINTS.COLLECTIONS;
      const res = await fetch(`${endpoint}/name/${decodedName}`);

      return res.json();
    },
  });

  return (
    <main className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto my-20">
      <Section className="grid grid-cols-1 xl:grid-cols-3 grid-rows-1 w-full gap-x-10 pt-0 mt-10">
        <div className="col-span-1 xl:col-span-2">
          <Subtitle>{data.name}</Subtitle>
          <Paragraph className="text-gray-500 xl:text-xl">
            #{searchParams.get("type") === "collection" ? "Colección" : "Fósil"}
          </Paragraph>
          <Paragraph>{data.description}</Paragraph>
          <Paragraph>
            <b>
              {data.photographers.length > 1 ? "Fotógrafos" : "Fotógrafo"}:{" "}
            </b>
            <small className="text-own-light-black">
              {data.photographers.join(", ")}
            </small>
          </Paragraph>
        </div>

        <img
          src={`${BASE_API_URL}/${data.images.find((img) => img.isFront)?.url}`}
          alt=""
        />
      </Section>
      {data.images.length > 1 && (
        <Section>
          <Subtitle className="xl:text-4xl">Otras imágenes</Subtitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.images
              .filter((img) => !img.isFront)
              .map((img, index) => (
                <img
                  key={index}
                  src={`${BASE_API_URL}/${img.url}`}
                  alt={`Imagen ${index + 1} de ${data.name}`}
                  className="w-full object-cover"
                />
              ))}
          </div>
        </Section>
      )}
    </main>
  );
}
