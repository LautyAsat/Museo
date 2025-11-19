import Paragraph from "@/components/Paragraph";
import { CommentItem } from "../types/commentItem";

export default function Comments({ comments }: { comments: CommentItem[] }) {
  return (
    <div className="flex flex-col gap-y-4">
      {comments.length === 0 ? (
        <div className="bg-gray-100 flex px-4 py-6 items-center">
          <Paragraph className="xl:text-xl mt-0">
            No hay comentarios aún. Sé el primero en comentar!
          </Paragraph>
        </div>
      ) : (
        comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-gray-100 flex px-4 py-6 items-center"
          >
            <Paragraph className="mt-0">
              <b>{comment.username ?? "Usuario Anónimo"}:</b>
            </Paragraph>
            <Paragraph className="mt-0 ml-2">{comment.text}</Paragraph>
          </div>
        ))
      )}
    </div>
  );
}
