"use client";

import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import HamburgerIcon from "@/components/icons/HamburguerIcon";
import HamburguerMenu from "./HamburgerMenu";
import DarkModeIcon from "@/components/icons/DarkModeIcon";

export default function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const { user, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (userPrefersDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setHidden(false);
        setLastScroll(0);
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 720) setHidden(true);
      else if (currentScroll < lastScroll - 20) setHidden(false);

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  return (
    <>
      <HamburguerMenu
        isOpen={isHamburgerOpen}
        close={() => setIsHamburgerOpen(false)}
      />
      <header
        className={`w-full px-4 md:px-10 bg-header text-white sticky z-50 top-0 left-0 transition-transform duration-500 ease-in-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between py-6">
          <div className="w-46 flex flex-start items-center">
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="hidden md:block bg-white p-2 rounded-md cursor-pointer"
            >
              <DarkModeIcon className="size-8" />
            </button>
          </div>

          <div className="flex justify-between md:block text-center w-full">
            <button
              onClick={(e) => {
                setIsHamburgerOpen(!isHamburgerOpen);
              }}
            >
              <HamburgerIcon className="md:hidden size-8 fill-own-white" />
            </button>
            <h1 className={`text-3xl md:text-6xl font-cormorant font-bold`}>
              Museo de La Pampa
            </h1>
          </div>

          {user ? (
            <button
              onClick={logout}
              className="hidden md:block border border-own-black bg-white text-black w-46 px-6 text-center py-2 cursor-pointer rounded-lg"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link
              href="/login"
              className="hidden md:block border border-solid border-gray-50 bg-white text-center text-black w-46 px-6 py-2 rounded-lg"
            >
              Iniciar sesión
            </Link>
          )}
        </div>

        <div className="hidden md:block border-b border-white"></div>

        <nav
          className={`hidden md:flex justify-center gap-6 py-3 text-base font-montserratv`}
        >
          <Link
            href="/"
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-own-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Inicio
          </Link>

          <Link
            href="/colecciones"
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-own-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Colecciones
          </Link>

          <Link
            href="/noticias"
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-own-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Noticias
          </Link>
        </nav>
      </header>
    </>
  );
}
