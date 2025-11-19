import { postComment } from "@/app/(public)/noticias/actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function CommentsForm({
  newsId,
  path,
}: {
  newsId: string;
  path: string;
}) {
  return (
    <form
      action={postComment}
      className="bg-gray-100 p-4 flex flex-col items-end"
    >
      <input type="hidden" name="newsId" value={newsId} />
      <input type="hidden" name="path" value={path} />
      <textarea
        maxLength={255}
        name="text"
        className="w-full h-32 p-2 mb-4 resize-none font-montserratv text-xl focus:outline-none"
        placeholder="Escribe tu comentario aquí..."
      ></textarea>
      <SubmitButton />
    </form>
  );
}
