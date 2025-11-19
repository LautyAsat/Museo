import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-own-black text-own-white py-10 px-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-y-2 md:flex-row justify-start gap-x-8 text-3xl font-cormorant">
          <Link href="/" className=" block text-center">
            inicio
          </Link>
          <Link href="/fosiles" className=" block text-center">
            fosiles
          </Link>
          <Link href="/colecciones" className=" block text-center">
            colecciones
          </Link>
          <Link href="/noticias" className=" block text-center">
            noticias
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <h5 className="hidden md:block font-cormorant text-3xl text-center md:text-left">
            Nuestras redes
          </h5>
          <div className="flex justify-center md:justify-start gap-x-4 mt-4">
            <Link
              href="https://www.facebook.com/MPHistoriaNatural/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full border-gray-600"
            >
              <FacebookIcon className="size-8 fill-own-white" />
            </Link>
            <Link
              href="https://www.instagram.com/mphistorianatural/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full border-gray-600"
            >
              <InstagramIcon className="size-8 fill-own-white" />
            </Link>
          </div>
        </div>
      </div>
      <Paragraph className="mt-20 lg:text-xl text-center text-own-white">
        © Todos los derechos reservados
      </Paragraph>
    </footer>
  );
}
