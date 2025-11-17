"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeContextProvider } from "@/providers/themeContext";
import { LanguageContextProvider } from "@/providers/languageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
