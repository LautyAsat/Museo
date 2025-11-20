import { cn } from "../utils/utils";

export default function Section({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("w-full pt-10 md:pt-20", className)} {...props}>
      {children}
    </section>
  );
}
