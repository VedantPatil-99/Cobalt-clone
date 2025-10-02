import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <h1
        className={cn(
          "bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]",
          className,
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default Heading;
