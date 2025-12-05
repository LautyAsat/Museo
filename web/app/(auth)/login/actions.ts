"use server";

import { BASE_API_URL } from "@/utils/constants";
import { cookies } from "next/headers";

export type State = {
  message: string | null;
  email: string;
  success?: boolean;
  role?: "admin" | "visitor";
};

export async function handleLogin(prevState: State, formData: FormData) : Promise<State> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // TODO: const remember = formData.get("remember"); 

  // TODO: HACER VALIDACIONES CON REGEX

  try {
    const res = await fetch(`${BASE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json();

    const access_token = data?.access_token;
    const errorMessage = data?.message || res.statusText || "Error al iniciar sesión";

    if (!res.ok) {
      return { message: errorMessage, email, success: false };
    }

    (await cookies()).set("session_token", String(access_token), { httpOnly: true });

    return { message: null, email, success: true, role: data?.user.role };
  }
  catch (error) {
    return { message: "Error al iniciar sesión", email, success: false };
  }

}


export async function logoutAction() {
  (await cookies()).delete('session_token');
}