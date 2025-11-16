"use client";

import "../globals.css";
import { LanguageContextProvider } from "@/providers/languageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContextProvider } from "@/providers/themeContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <LanguageContextProvider>{children}</LanguageContextProvider>
          </ThemeContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
