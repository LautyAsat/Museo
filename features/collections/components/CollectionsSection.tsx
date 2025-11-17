"use client";

import Section from "@/components/Section";
import Subtitle from "@/components/subtitle";
import { useQuery } from "@tanstack/react-query";
import { Specie } from "../types/Species";
import Link from "next/link";

const API_COLLECTIONS_URL = "http://localhost:3001/collections";
const BENTO_ORDER = [
  "col-span-1 row-span-3",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
];

export default function CollectionsSection() {
  const { data } = useQuery({
    queryKey: ["collections"],
    queryFn: async () => {
      const response = await fetch(API_COLLECTIONS_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  console.log(data);

  return (
    <Section className="pb-36">
      <Subtitle className="text-own-white">
        #SUMERGETÉ EN NUESTRA ASOMBROSA COLECCIÓN
      </Subtitle>
      <p className="mt-4 text-lg md:text-2xl text-own-white opacity-90 font-montserratv ">
        Por años hemos reunido piezas únicas que cuentan la historia de nuestra
        región.
      </p>
      <div className="relative">
        <section className="mt-16 grid grid-cols-2 gap-6 grid-rows-5 grid-flow-dense max-h-[1000px]">
          {data?.map((specie: Specie, index: number) => {
            const frontImage = specie.images.find((image) => image.isFront);

            return (
              <img
                src={`http://localhost:3001/${frontImage?.url}`}
                key={specie._id}
                id={specie._id}
                alt={specie.name}
                className={` w-full h-full object-cover shadow-md ${BENTO_ORDER[index]}`}
              />
            );
          })}
        </section>
        <div className="absolute h-[400px] w-full bg-linear-to-b from-transparent via-own-light-black to-own-black bottom-0 left-0"></div>
        <Link
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          href="/colecciones"
        >
          <button className="px-8 py-2 text-own-black font-cormorant bg-own-white text-3xl cursor-pointer">
            Ver más
          </button>
        </Link>
      </div>
    </Section>
  );
}
