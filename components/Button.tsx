import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  isPrimary = true,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
}) {
  return (
    <button
      type="submit"
      className={cn(
        `${
          isPrimary ? "bg-primary" : "bg-own-white"
        } text-own-white text-xl font-bold font-cormorant py-2 rounded cursor-pointer`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
