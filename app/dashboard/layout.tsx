import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { jwtVerify } from "jose";

type Props = {
  children: ReactNode;
};

interface JwtPayload {
  email: string;
  sub: string;
  role: "visitor" | "admin";
}

export default async function Layout({ children }: Props) {
  const tokenCookie = (await cookies()).get("session_token");

  if (!tokenCookie) {
    redirect("/login");
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const { payload } = await jwtVerify(tokenCookie.value, secret);

    if (payload.role !== "admin") {
      console.log("al home pa");
      redirect("/");
    }
  } catch (error) {
    console.log("pase por aqui xd");
    redirect("/login?expired=true");
  }

  return <>{children}</>;
}
