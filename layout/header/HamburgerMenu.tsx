import { cn } from "@/utils/utils";

export default function HamburguerMenu({ className }: { className?: string }) {
  return (
    <div
      className={cn("md:hidden bg-primary w-full h-screen", className)}
    ></div>
  );
}
