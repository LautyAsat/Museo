import { cn } from "@/utils/utils";
import { Specie } from "../types/Species";
import { BASE_API_URL } from "@/utils/constants";

export default function BentoCardImage({
  frontImage,
  specie,
  className,
  ...props
}: {
  frontImage: string;
  specie: Specie;
  className?: string;
  [key: string]: any;
}) {
  return (
    <img
      src={`${BASE_API_URL}/${frontImage}`}
      id={specie._id}
      alt={specie.name}
      className={cn("w-full h-full object-cover shadow-md", className)}
      {...props}
    />
  );
}
