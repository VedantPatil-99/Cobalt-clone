import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import MainImg from "../../public/peakpx.jpg";

const Card = ({
  imgUrl,
  imgNode,
  title,
  description,
  className,
}: {
  imgUrl?: string;
  imgNode?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <div className="flex h-[32rem] max-h-[32rem] cursor-pointer flex-col items-start justify-between rounded-2xl border-2 border-neutral-800/50 bg-neutral-900/50 p-8">
        <div className="mask-t-from-80% mask-x-from-99% mask-b-from-35%">
          {imgUrl && (
            <Image
              src={imgUrl ?? MainImg}
              alt="Card Image"
              width={480}
              height={320}
              className="h-80 w-[30rem] rounded-xl object-cover object-center opacity-95"
            />
          )}
          {imgNode && (
            <div className="h-80 rounded-xl opacity-95">{imgNode}</div>
          )}
        </div>
        <div className="mt-4 flex max-w-sm flex-col">
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
        "text-md mb-3 font-semibold tracking-wide text-neutral-200",
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
        "text-sm leading-5.5 font-normal tracking-wide text-neutral-500",
        className,
      )}
    >
      {children}
    </p>
  );
};
