import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Upright, Montserrat_Alternates } from "next/font/google";
import { ThemeContextProvider } from "./providers/themeContext";
import { LanguageContextProvider } from "./providers/languageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Fuentes del Museo ---
export const cormorant = Cormorant_Upright({
    weight: ['400', '700'], 
    subsets: ['latin'],
    variable: '--font-cormorant', 
});

export const montserrat = Montserrat_Alternates({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${montserrat.variable} antialiased`}        
        suppressHydrationWarning={true}
      >
        <ThemeContextProvider>
          <LanguageContextProvider>
            {children}
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
