"use client";

import Button from "@/components/Button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Publicando..." : "Enviar Comentario"}
    </Button>
  );
}
