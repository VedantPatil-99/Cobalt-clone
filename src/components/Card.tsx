import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const Card = ({
  imgUrl,
  imgNode,
  imgClassName,
  title,
  description,
  className,
}: {
  imgUrl?: string;
  imgNode?: React.ReactNode;
  imgClassName?: string;
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div id="card" className={cn(className)}>
      <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition-colors duration-300 hover:bg-neutral-900">
        <div className="relative w-full overflow-hidden mask-b-from-40%">
          <div
            className={cn(
              "aspect-[4/3] w-full overflow-hidden bg-neutral-950",
              imgClassName,
            )}
          >
            {imgUrl ? (
              <Image
                src={imgUrl}
                alt={title || "Card Image"}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : imgNode ? (
              <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-neutral-500">
                {imgNode}
              </div>
            ) : (
              <div className="h-full w-full bg-neutral-800/50" />
            )}
          </div>
        </div>
        <div className="flex max-w-sm flex-grow flex-col justify-between px-6 py-4 md:p-8">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </div>
    </div>
  );
};

export default Card;

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "mb-2 text-lg font-semibold tracking-wide text-neutral-100/90",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed tracking-wide text-neutral-500",
        className,
      )}
    >
      {children}
    </p>
  );
};
