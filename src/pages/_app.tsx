"use client";

import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../providers/themeContext";
import { LanguageContextProvider } from "../providers/languageContext";
import "../globals.css"; // ajustá el path según donde tengas tu css

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <div>
            <Component {...pageProps} />
          </div>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
