"use client";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Separator from "@/components/Separator";
import Subtitle from "@/components/subtitle";
import Comments from "@/features/news/components/Comments";
import CommentsForm from "@/features/news/components/CommentsForm";
import NewsAside from "@/features/news/components/NewsAside";
import { NewsItem } from "@/features/news/types/newsItem";
import { useAuth } from "@/hooks/useAuth";
import { API_ENDPOINTS, BASE_API_URL } from "@/utils/constants";
import { formatDate } from "@/utils/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function page() {
  const { slug }: { slug: string } = useParams();
  const { user } = useAuth();
  const id = slug.split("nid-")[1];

  const { data }: { data: NewsItem } = useSuspenseQuery({
    queryKey: ["noticia", id],
    queryFn: async () => {
      const res = await fetch(`${API_ENDPOINTS.NEWS}/${id}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  const { data: asideNews }: { data: NewsItem[] } = useSuspenseQuery({
    queryKey: ["noticia"],
    queryFn: async () => {
      const res = await fetch(`${API_ENDPOINTS.NEWS}/`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();

      return json
        .filter((item: NewsItem) => item._id.toString() !== id)
        .slice(0, 2);
    },
  });

  return (
    <main className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto my-20">
      <Subtitle>{data.title}</Subtitle>
      <Paragraph className="text-gray-500 xl:text-xl">
        Noticia subida el {formatDate(data.createAt)}
      </Paragraph>
      <Paragraph>{data.content}</Paragraph>

      <Section className="grid grid-cols-4 grid-rows-1 w-full gap-x-10 pt-0 mt-10">
        <div className="col-span-3">
          <img
            src={`${BASE_API_URL}/${data.image}`}
            alt={data.title}
            className="h-96 w-full object-cover"
          />
          <Paragraph>
            <span className="font-bold">Lugar:</span>
            {` ${data.place}`}
          </Paragraph>
          <Paragraph>
            <span className="font-bold">Horario:</span>
            {` ${formatDate(data.date)}`}
          </Paragraph>
          <Paragraph>
            <span className="font-bold">Entrada:</span>
            {data.typeEntrance === "free" ? " Gratis" : ` ${data.price}$`}
          </Paragraph>
        </div>

        <NewsAside news={asideNews} />
      </Section>
      <Section>
        <Subtitle>Comentarios</Subtitle>

        <Paragraph className="mb-4">Deja tu opinión de la noticia</Paragraph>

        {user ? (
          <CommentsForm newsId={data._id} path={slug} />
        ) : (
          <div className="flex">
            <div className="bg-gray-100 p-4 rounded-md">
              <Paragraph className="mt-0">
                Debes iniciar sesión para comentar.
              </Paragraph>
            </div>
            <Link href="/login">
              <Button className="px-8 py-4 ml-4">Inicia sesión</Button>
            </Link>
          </div>
        )}

        <Separator />

        <div>
          <h3 className="font-cormorant text-2xl mb-4">
            Comentarios Existentes
          </h3>
          <Comments comments={data.comments} />
        </div>
      </Section>
    </main>
  );
}
