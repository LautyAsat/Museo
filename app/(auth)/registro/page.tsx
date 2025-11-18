import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Separator from "@/components/Separator";
import Subtitle from "@/components/subtitle";
import Link from "next/link";

export default function Registro() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="w-96 lg:w-[500px] shadow-lg py-4 px-4 ">
        <h1 className="font-cormorant text-4xl lg:text-5xl text-own-black font-bold">
          Registra una cuenta
        </h1>
        <form
          action="#"
          className="mt-4 font-montserratv flex flex-col gap-y-4"
        >
          <InputText
            name="email"
            text="Correo Electronico"
            id="email"
            type="email"
            autoComplete="email"
            isRequired
          />

          <InputText
            name="password"
            text="Contraseña"
            id="password"
            type="password"
            autoComplete="password"
            isRequired
          />

          <InputText
            name="confirmation"
            text="Confirma Contraseña"
            id="confirmation"
            type="password"
            autoComplete="password"
            isRequired
          />

          <Button isPrimary>Registrarse</Button>
        </form>

        <Separator />

        <Subtitle className="text-xl lg:text-2xl text-own-black opacity-80">
          ¿Ya tienes una cuenta?
        </Subtitle>

        <Link href="/login">
          <Button
            isPrimary={false}
            className="mt-0 text-lg w-fit border-own-black text-own-black border px-4 py-1"
          >
            Haz Login aquí
          </Button>
        </Link>
      </div>
    </div>
  );
}
