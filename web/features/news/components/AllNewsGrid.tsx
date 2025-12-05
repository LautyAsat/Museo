"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import NewsCard from "./NewsCard";
import { createSlug, formatDate } from "@/utils/utils";
import { NewsItem } from "../types/newsItem";
import { Suspense } from "react";
import AllNewsGridSkeleton from "./AllNewsGridSkeleton";
import { API_ENDPOINTS, BASE_API_URL } from "@/utils/constants";

const API_NEWS_URL = API_ENDPOINTS.NEWS;

function AllNewsGridContent() {
  const query = useSuspenseQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await fetch(API_NEWS_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[24rem] gap-4 bg-background">
      {query.data?.map((newsItem: NewsItem, index: number) => (
        <NewsCard
          key={index}
          title={newsItem.title}
          date={formatDate(newsItem.date)}
          summary={newsItem.content}
          imageUrl={`${BASE_API_URL}/${newsItem.image}`}
          className={"col-span-1 row-span-1"}
          slug={createSlug(newsItem.title, newsItem._id)}
        />
      ))}
    </div>
  );
}

export default function AllNewsGrid() {
  return (
    <Suspense fallback={<AllNewsGridSkeleton />}>
      <AllNewsGridContent />
    </Suspense>
  );
}
