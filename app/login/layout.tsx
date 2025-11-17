import { UserPayload } from "@/types/UserPayload";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokenCookie = (await cookies()).get("session_token");

  if (!tokenCookie) {
    return <>{children}</>;
  }

  let payloadResponse;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const { payload } = await jwtVerify<UserPayload>(tokenCookie.value, secret);

    payloadResponse = payload;
  } catch (error) {
    return <>{children}</>;
  }

  if (payloadResponse.role === "admin") {
    console.log("redireccionando a dashboard");
    redirect("/dashboard");
  }

  if (payloadResponse.role === "visitor") {
    console.log("redireccionando a home");
    redirect("/");
  }
}
