import "../globals.css";
import Providers from "@/providers/Providers";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { UserPayload } from "@/types/UserPayload";

async function getUserFromToken(): Promise<UserPayload | null> {
  const tokenCookie = (await cookies()).get("session_token");

  if (!tokenCookie) {
    return null;
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) throw new Error("JWT_SECRET_KEY no definida");

    const secret = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify<UserPayload>(tokenCookie.value, secret);

    return payload;
  } catch (error) {
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initialUser = await getUserFromToken();

  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <Providers initialUser={initialUser}>{children}</Providers>
      </body>
    </html>
  );
}
