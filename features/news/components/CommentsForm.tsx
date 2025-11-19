import Button from "@/components/Button";

export default function CommentsForm() {
  return (
    <form className="bg-gray-100 p-4 flex flex-col items-end">
      <textarea
        className="w-full h-32 p-2 mb-4 resize-none font-montserratv text-xl focus:outline-none"
        placeholder="Escribe tu comentario aquí..."
      ></textarea>
      <Button className=" text-white px-4 py-2 rounded">
        Enviar Comentario
      </Button>
    </form>
  );
}
