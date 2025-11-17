import { cn } from "@/lib/utils";
import { Specie } from "../types/Species";

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
      src={`http://localhost:3001/${frontImage}`}
      id={specie._id}
      alt={specie.name}
      className={cn("w-full h-full object-cover shadow-md", className)}
      {...props}
    />
  );
}
