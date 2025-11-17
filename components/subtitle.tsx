import { cn } from "@/lib/utils";
import React from "react";

type Props = Readonly<
  React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
    className?: string;
  }
>;

export default function Subtitle({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <h2
      className={cn(
        "text-6xl text-black font-cormorant font-bold mb-6 text-balance",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
