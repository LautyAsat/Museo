"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeContextProvider } from "@/providers/themeContext";
import { LanguageContextProvider } from "@/providers/languageContext";
import { AuthProvider } from "./AuthContext";
import { Toaster } from "sonner";

interface UserPayload {
  email: string;
  role: string;
}

export default function Providers({
  initialUser,
  children,
}: {
  initialUser: UserPayload | null;
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <AuthProvider initialUser={initialUser}>
          <Toaster />
          <LanguageContextProvider>{children}</LanguageContextProvider>
        </AuthProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
