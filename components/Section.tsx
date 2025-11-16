import { cn } from "../lib/utils";

export default function Section({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("w-full pt-20", className)} {...props}>
      {children}
    </section>
  );
}
