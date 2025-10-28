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
    <div className={cn("my-6 grid grid-cols-3 gap-10", className)}>
      {children}
    </div>
  );
};

export default CardPack;
