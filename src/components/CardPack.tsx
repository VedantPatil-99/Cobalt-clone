import { cn } from "@/lib/utils";
import React from "react";

const CardPack = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "my-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardPack;
