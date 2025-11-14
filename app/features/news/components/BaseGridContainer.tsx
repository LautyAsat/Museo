"use client";

import { NewsItem } from "../types/newsItem";
import NewsCard from "./NewsCard";
import { useQuery } from "@tanstack/react-query";

const API_NEWS_URL = "http://localhost:3001/news";

export default function () {
  const query = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await fetch(API_NEWS_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const formatted = new Intl.DateTimeFormat("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);

    return formatted;
  }

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 bg-background">
      {query.data?.map((newsItem: NewsItem, index: number) => (
        <NewsCard
          key={index}
          title={newsItem.title}
          date={formatDate(newsItem.date)}
          summary={newsItem.content}
          imageUrl={`http://localhost:3001/${newsItem.image}`}
          className={
            index % 4 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }
        />
      ))}
    </div>
  );
}
