"use client";

import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/subtitle";
import { useQuery } from "@tanstack/react-query";
import { getAllNews, toggleCommentApproval } from "../actions";
import { BASE_API_URL } from "@/utils/constants";
import { useState } from "react";
import Section from "@/components/Section";
import { NewsItem } from "@/features/news/types/newsItem";

export default function page() {
  const [postSelected, setPostSelected] = useState<NewsItem | null>(null);
  const { isLoading, data, error } = useQuery({
    queryKey: ["allnews"],
    queryFn: async () => await getAllNews(),
  });

  return (
    <div className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto py-20">
      <Subtitle className="font-cormorant text-5xl font-bold mb-4">
        Noticias
      </Subtitle>
      <Paragraph>Gestión de noticias próximamente</Paragraph>

      {isLoading && (
        <Paragraph className="font-bold">Cargando noticias...</Paragraph>
      )}

      {error && (
        <Paragraph className="font-bold">
          Error al cargar las noticias: {(error as Error).message}
        </Paragraph>
      )}

      {data && data.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.map((newsItem) => (
            <img
              key={newsItem._id}
              className="cursor-pointer"
              src={`${BASE_API_URL}/${newsItem.image}`}
              alt={newsItem.title}
              onClick={() => setPostSelected(newsItem)}
            />
          ))}
        </div>
      )}

      {postSelected && (
        <Section>
          <Subtitle className="font-cormorant text-4xl font-bold mb-4">
            {postSelected.title}
          </Subtitle>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm text-gray-500">
              {/* HEADER */}
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 font-montserratv font-bold">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Usuario
                  </th>
                  <th scope="col" className="px-6 py-4 w-1/2">
                    {" "}
                    {/* w-1/2 da más espacio al mensaje */}
                    Mensaje
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Aprobado
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {postSelected.comments.map((comment) => (
                  <tr
                    key={comment._id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {comment.username}
                    </td>

                    <td className="px-6 py-4 text-gray-600">{comment.text}</td>

                    <td className="px-6 py-4 text-center">
                      <input
                        type="checkbox"
                        defaultChecked={comment.isApproved}
                        onChange={(e) =>
                          toggleCommentApproval(
                            postSelected._id,
                            comment._id,
                            e.target.checked
                          )
                        }
                        className="h-5 w-5 cursor-pointer rounded border-gray-300 text-own-black focus:ring-own-black accent-own-black"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {postSelected.comments.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No hay comentarios en esta publicación.
              </div>
            )}
          </div>
        </Section>
      )}
    </div>
  );
}
