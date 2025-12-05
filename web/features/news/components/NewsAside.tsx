import Paragraph from "@/components/Paragraph";
import { BASE_API_URL } from "@/utils/constants";
import { createSlug } from "@/utils/utils";
import Link from "next/link";
import { NewsItem } from "../types/newsItem";

export default function NewsAside({ news }: { news: NewsItem[] }) {
  return (
    <aside className="hidden md:block col-span-1">
      <h3 className="font-cormorant text-3xl">Otras Noticias</h3>

      {news.map((item) => (
        <Link
          key={item._id}
          href={`${createSlug(item.title, item._id)}`}
          className="mt-10 flex flex-col cursor-pointer group overflow-hidden shadow-lg"
        >
          <div>
            <div className="h-40 w-full overflow-hidden">
              <img
                src={`${BASE_API_URL}/${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover mb-4 group-hover:scale-125 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium font-cormorant">
                {item.title}
              </h3>
              <Paragraph className="text-lg xl:text-lg 2xl:text-lg line-clamp-3">
                {item.content}
              </Paragraph>
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
}
