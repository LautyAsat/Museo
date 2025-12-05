import { cn } from "@/utils/utils";

export default function Button({
  children,
  className,
  isPrimary = true,
  disabled = false,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      className={cn(
        `${
          isPrimary ? "bg-primary" : "bg-own-white"
        } text-own-white text-xl font-bold font-cormorant py-2 rounded cursor-pointer lg:text-2xl`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
