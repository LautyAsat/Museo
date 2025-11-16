import { validateSession } from "@/lib/validateToken";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (await validateSession()) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
