import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { jwtVerify } from "jose";

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  const tokenCookie = (await cookies()).get("session_token");

  if (!tokenCookie) {
    redirect("/login");
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    await jwtVerify(tokenCookie.value, secret);
  } catch (error) {
    redirect("/login?expired=true");
  }

  return <>{children}</>;
}
