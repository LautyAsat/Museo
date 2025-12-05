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
      className={`group cursor-pointer overflow-hidden bg-own-white 
                        transition duration-300 shadow-lg hover:shadow-xl
                         ${className}`}
    >
      <article className="w-full h-full flex flex-col text-own-black">
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
          <p className={`text-sm text-own-light-gray mb-2 `}>{date}</p>
          <h3 className={`font-bold text-xl mb-3 leading-snug `}>{title}</h3>
          <p className={`text-own-dark-gray text-base mb-4 line-clamp-2 `}>
            {summary}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
