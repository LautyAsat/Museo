"use client";

import Section from "@/components/Section";
import Subtitle from "@/components/subtitle";
import Link from "next/link";
import BentoCollection from "./BentoCollection";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";

export default function CollectionsSection() {
  return (
    <Section className="">
      <Subtitle className="text-own-white">
        #SUMERGETÉ EN NUESTRA ASOMBROSA COLECCIÓN
      </Subtitle>
      <Paragraph className="text-own-white">
        Por años hemos reunido piezas únicas que cuentan la historia de nuestra
        región.
      </Paragraph>
      <div className="relative">
        <BentoCollection />
        <div className="absolute h-[400px] w-full bg-linear-to-b from-transparent via-own-light-black to-own-black bottom-0 left-0"></div>
        <Link
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          href="/colecciones"
        >
          <Button className="px-8 py-2 text-own-black bg-own-white">
            Ver más
          </Button>
        </Link>
      </div>
    </Section>
  );
}
