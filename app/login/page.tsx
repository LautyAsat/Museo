"use client";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import InputText from "@/components/InputText";
import Separator from "@/components/Separator";
import Subtitle from "@/components/subtitle";
import Link from "next/link";
import { handleLogin, State } from "./actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

const initialState: State = {
  message: null,
  email: "",
};

export default function Login() {
  const router = useRouter();
  const [state, formAction] = useActionState(handleLogin, initialState);

  useEffect(() => {
    if (state.message === null && state.email !== "") {
      router.push("/dashboard");
    }
  }, [state, router]);

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="w-96 lg:w-[500px] shadow-lg py-4 px-4 ">
        <h1 className="font-cormorant text-4xl lg:text-5xl text-own-black font-bold">
          Inicia Sesión
        </h1>
        <form
          action={formAction}
          className="mt-4 font-montserratv flex flex-col gap-y-4"
        >
          <InputText
            name="email"
            text="Correo Electronico"
            id="email"
            type="email"
            autoComplete="email"
            isRequired
            defaultValue={state.email}
          />

          <InputText
            name="password"
            text="Contraseña"
            id="password"
            type="password"
            autoComplete="password"
            isRequired
          />

          <Checkbox name="remember" text="Recuérdame" id="remember" />

          <Button isPrimary>Iniciar Sesión</Button>

          {state.message && (
            <p className="text-sm text-red-500 text-center mt-2">
              {state.message}
            </p>
          )}
        </form>

        <Link href="/forgot-password">
          <p className="mb-2 my-6 text-center font-montserratv text-sm lg:text-base text-gray-500">
            ¿Olvidaste tu contraseña?
          </p>
        </Link>

        <Separator />

        <Subtitle className="text-xl lg:text-2xl text-own-black opacity-80">
          ¿No tienes una cuenta?
        </Subtitle>

        <Link href="/register">
          <Button
            isPrimary={false}
            className="mt-0 text-lg w-fit border-own-black text-own-black border px-4 py-1"
          >
            Registrate aquí
          </Button>
        </Link>
      </div>
    </div>
  );
}
