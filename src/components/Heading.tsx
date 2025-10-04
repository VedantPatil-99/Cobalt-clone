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
          "bg-gradient-to-br from-white to-zinc-500 bg-clip-text font-bold tracking-tight text-transparent",
          className,
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default Heading;
