"use client";

import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Subtitle from "@/components/subtitle";
import BentoCardImage from "@/features/collections/components/BentoCardImage";
import { Specie } from "@/features/collections/types/Species";
import { API_ENDPOINTS } from "@/utils/constants";
import { useSuspenseQueries } from "@tanstack/react-query";
import Link from "next/link";
import { Suspense, useMemo, useState } from "react";

const BENTO_ORDER = [
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-2",
];

interface filterType {
  name?: string;
}

type SpecieWithType = Specie & { type: "collection" | "fossil" };

function CollectionsContent() {
  const [filter, setFilter] = useState<filterType>({ name: "" });

  const [collectionsQuery, fossilsQuery] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["collections"],
        queryFn: async () => (await fetch(API_ENDPOINTS.COLLECTIONS)).json(),
      },
      {
        queryKey: ["fossils"],
        queryFn: async () => (await fetch(API_ENDPOINTS.FOSSILS)).json(),
      },
    ],
  });

  const collectionsWithFossilsFiltered = useMemo<SpecieWithType[]>(() => {
    const collections = collectionsQuery.data;
    const fossils = fossilsQuery.data;

    const safeCollections = Array.isArray(collections) ? collections : [];
    const safeFossils = Array.isArray(fossils) ? fossils : [];

    const mappedCollections = safeCollections.map((item: Specie) => ({
      ...item,
      type: "collection" as const,
    }));

    const mappedFossils = safeFossils.map((item: Specie) => ({
      ...item,
      type: "fossil" as const,
    }));

    const collectionsWithFossils: SpecieWithType[] = [
      ...mappedCollections,
      ...mappedFossils,
    ];

    if (!filter.name || filter.name.trim() === "") {
      return collectionsWithFossils;
    }

    return collectionsWithFossils.filter((specie: Specie) =>
      specie.name.toLowerCase().includes(filter.name!.toLowerCase())
    );
  }, [filter, collectionsQuery.data, fossilsQuery.data]);

  console.log(filter.name);

  return (
    <main className="mt-12 px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto">
      <Subtitle>Explora por toda nuestra colección</Subtitle>
      <Paragraph className="mb-4">Filtra por nombre:</Paragraph>
      <input
        id="name"
        name="name"
        className="block px-4 py-6 bg-own-extra-light-gray w-full text-xl font-montserratv focus:outline-none "
        value={filter.name}
        onChange={(e) => {
          console.log(filter.name);
          setFilter((prev) => ({ ...prev, name: e.target.value }));
        }}
        placeholder="Golondrina Negra..."
      />
      <Paragraph className="my-4 xl:text-xl text-own-light-black">
        Resultados encontrados: {collectionsWithFossilsFiltered.length}
      </Paragraph>

      <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-6 mt-10 auto-rows-[400px] grid-flow-dense">
        {collectionsWithFossilsFiltered.map(
          (specie: SpecieWithType, index: number) => {
            const frontImage = specie.images.find((image) => image.isFront);

            return (
              <Link
                key={specie._id}
                href={`/colecciones/${specie.name}?type=${specie.type}`}
                className={`${
                  BENTO_ORDER[index % BENTO_ORDER.length]
                } relative cursor-pointer overflow-hidden block w-full`}
              >
                <BentoCardImage
                  frontImage={frontImage?.url || "uploads/not-found.png"}
                  specie={specie}
                />
                <div className="absolute w-full h-full top-0 left-0 bg-linear-to-b transition-colors duration-300 ease-out from-transparent via-own-trasparent to-own-black flex items-end justify-center"></div>
                <h5 className="absolute h-fit w-full z-10 bottom-1/6 text-center font-cormorant text-own-white text-4xl font-bold pointer-events-none">
                  {specie.name}
                </h5>
              </Link>
            );
          }
        )}
      </Section>
    </main>
  );
}

function LoadingFallback() {
  return (
    <div className="py-20 text-center animate-pulse">
      Cargando colecciones...
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CollectionsContent />
    </Suspense>
  );
}
