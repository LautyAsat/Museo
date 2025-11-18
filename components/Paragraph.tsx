import { cn } from "@/lib/utils";

export default function Paragraph({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLParagraphElement>;
}) {
  return (
    <p
      className={cn(
        "mt-4 text-lg md:text-2xl text-own-black opacity-90 font-montserratv",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
