import Link from "next/link";

interface NewsCardProps {
  className?: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  slug: string;
}

const NewsCard = ({
  title,
  date,
  summary,
  imageUrl,
  className = "",
  slug,
}: NewsCardProps) => {
  return (
    <Link
      href={`/noticias/${slug}`}
      className={`group cursor-pointer overflow-hidden bg-white 
                        transition duration-300 shadow-lg hover:shadow-xl
                         ${className}`}
    >
      <article className="w-full h-full flex flex-col">
        <header className="w-full h-96 overflow-hidden grow">
          <img
            className="w-full h-full object-cover
                               transform transition-transform duration-300 ease-in-out 
                               group-hover:scale-105"
            src={imageUrl}
            alt={title}
          />
        </header>

        <div className="p-6 shrink-0">
          <p className={`text-sm text-gray-500 mb-2 `}>{date}</p>
          <h3 className={`font-bold text-xl mb-3 text-gray-900 leading-snug `}>
            {title}
          </h3>
          <p className={`text-gray-700 text-base mb-4 line-clamp-2 `}>
            {summary}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
