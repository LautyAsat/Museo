"use client";

import { postComment } from "@/app/(public)/noticias/actions";
import { SubmitButton } from "@/components/SubmitButton";
import { toast } from "sonner";

export default function CommentsForm({
  newsId,
  path,
}: {
  newsId: string;
  path: string;
}) {
  async function handleAction(formData: FormData) {
    const text = formData.get("text") as string;
    if (!text || text.trim() === "") {
      toast.warning("El comentario no puede estar vacío");
      return;
    }

    console.log("naaa no puede ser");

    const result = await postComment(formData);

    if (result?.success) {
      toast.success("¡Comentario enviado con éxito!");
    } else {
      toast.error(result?.message || "Ocurrió un error inesperado");
    }
  }

  return (
    <form
      action={handleAction}
      className="bg-gray-100 p-4 flex flex-col items-end"
    >
      <input type="hidden" name="newsId" value={newsId} />
      <input type="hidden" name="path" value={path} />
      <textarea
        required
        maxLength={255}
        name="text"
        className="w-full h-32 p-2 mb-4 resize-none font-montserratv text-xl focus:outline-none"
        placeholder="Escribe tu comentario aquí..."
      ></textarea>
      <SubmitButton />
    </form>
  );
}
