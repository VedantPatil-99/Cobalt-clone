import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import MainImg from "../../public/peakpx.jpg";

const Card = ({
  imgUrl,
  title,
  description,
}: {
  imgUrl?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="flex max-h-[32rem] cursor-pointer flex-col items-start justify-between rounded-2xl border-2 border-neutral-800/50 bg-neutral-900/25 p-8">
      <div className="mask-t-from-80% mask-r-from-99% mask-b-from-35% mask-l-from-99%">
        <Image
          src={imgUrl ?? MainImg}
          alt="Card Image"
          width={480}
          height={320}
          className="h-80 rounded-xl object-cover object-center opacity-95"
        />
      </div>
      <div className="mt-4 flex max-w-sm flex-col">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
    <>
      <h1
        className={cn(
          "text-md mb-3 font-semibold tracking-wide text-neutral-200",
          className,
        )}
      >
        {children}
      </h1>
    </>
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
    <>
      {" "}
      <p
        className={cn(
          "text-sm leading-5.5 font-normal tracking-wide text-neutral-500",
          className,
        )}
      >
        {children}
      </p>
    </>
  );
};
