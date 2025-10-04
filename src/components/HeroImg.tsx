import { cn } from "@/lib/utils";
import type { Variants } from "motion";
import * as motion from "motion/react-client";
import Image from "next/image";
import MainImg from "../../public/dashboard.webp";

const sliderVariants: Variants = {
  slideRight: {
    x: ["-100%", "200%"], // Moves left-to-right
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut", // Smoother easing
    },
  },
  slideLeft: {
    x: ["100%", "-200%"], // Moves right-to-left
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

const HeroImg = () => {
  return (
    <>
      <section className="mx-auto mt-8 max-w-7xl px-10 py-6">
        <div className="relative mx-auto flex max-w-6xl">
          <Slider className="-top-px right-20" position="top" />
          <div className="size-full rounded-3xl bg-zinc-950 ring-1 ring-white/10">
            <Image
              src={MainImg}
              alt="Landing image app screenshot"
              className="size-full rounded-3xl object-cover"
            />
          </div>
          <Slider className="-bottom-2 left-20" position="bottom" />
        </div>
      </section>
    </>
  );
};

export const Slider = ({
  className,
  position,
}: {
  className?: string;
  position: "top" | "bottom";
}) => {
  return (
    <div
      className={cn(
        "absolute h-2 w-50 overflow-clip [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)]",
        className,
      )}
    >
      <motion.div
        variants={sliderVariants}
        animate={position === "top" ? "slideRight" : "slideLeft"}
        className="h-px w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"
      />
    </div>
  );
};

export default HeroImg;
