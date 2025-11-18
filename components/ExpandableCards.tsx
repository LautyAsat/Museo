import { cn } from "@/utils/utils";

export interface AccordionItem {
  id: string | number;
  title: string;
  imageSrc: string;
}

export default function ExpandableCards({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  return (
    <div className={cn("flex w-full", className)}>
      {items.map((item: AccordionItem) => {
        return (
          <figure
            key={item.id}
            className="h-[700px] flex-1 m-2 overflow-hidden rounded-lg transition-all duration-300 hover:flex-4"
          >
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </figure>
        );
      })}
    </div>
  );
}
