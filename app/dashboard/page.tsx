import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/subtitle";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto py-20">
      <Subtitle className="font-cormorant text-5xl font-bold mb-4">
        Dashboard
      </Subtitle>
      <Paragraph>Bienvenido al panel de administración.</Paragraph>

      <div className="grid grid-cols-2 gap-4 w-fit mt-10">
        <Link
          href={"/dashboard/noticias"}
          className="flex justify-center items-center text-own-black text-4xl font-montserratv rounded-xl bg-gray-100 w-[400px] h-[400px]"
        >
          Noticias
        </Link>
      </div>
    </div>
  );
}
