"use server";

import { cookies } from "next/headers";

export type State = {
  message: string | null;
  email: string;
};

export async function handleLogin(prevState: State, formData: FormData) : Promise<State> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // TODO: const remember = formData.get("remember"); 

  try {
    const res = await fetch("http://localhost:3001/auth/login", {
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
      return { message: errorMessage, email};
    }

    (await cookies()).set("session_token", String(access_token), { httpOnly: true });

    return { message: null, email };
  }
  catch (error) {
    return { message: "Error al iniciar sesión", email };
  }

}
