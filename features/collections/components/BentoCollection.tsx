"use client";

import { useQuery } from "@tanstack/react-query";
import { Specie } from "../types/Species";
import BentoCardImage from "./BentoCardImage";
import { API_ENDPOINTS } from "@/utils/constants";

const API_COLLECTIONS_URL = API_ENDPOINTS.COLLECTIONS;
const BENTO_ORDER = [
  "col-span-1 row-span-3",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
];

export default function BentoCollection() {
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

  return (
    <section className="mt-16 grid grid-cols-2 gap-6 grid-rows-5 grid-flow-dense max-h-[1000px]">
      {data?.map((specie: Specie, index: number) => {
        const frontImage = specie.images.find((image) => image.isFront);

        return (
          <BentoCardImage
            key={specie._id}
            frontImage={frontImage?.url || "uploads/not-found.png"}
            specie={specie}
            className={BENTO_ORDER[index]}
          />
        );
      })}
    </section>
  );
}
