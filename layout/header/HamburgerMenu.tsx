import Separator from "@/components/Separator";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { useEffect } from "react";

export default function HamburguerMenu({
  className,
  isOpen,
  close,
}: {
  className?: string;
  isOpen?: boolean;
  close: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        `${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden bg-primary w-full h-screen fixed top-0 left-0 transition-all duration-300 z-40`,
        className
      )}
    >
      <nav className="w-full h-full flex flex-col">
        <ul className="flex flex-col items-center justify-center text-own-white h-full gap-10 text-2xl font-montserratv">
          <li>
            <Link href="/" onClick={close}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/colecciones" onClick={close}>
              Colecciones
            </Link>
          </li>
          <li>
            <Link href="/noticias" onClick={close}>
              Noticias
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
