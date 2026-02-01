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
      <section id="hero-img" className="mx-auto my-8 max-w-7xl px-10 py-6">
        <div className="relative mx-auto flex max-w-7xl">
          <Slider className="-top-px right-25 md:right-20" position="top" />
          <div className="size-full rounded-xl bg-zinc-950 ring-1 ring-white/10 md:rounded-3xl">
            <Image
              src={MainImg}
              alt="Landing image app screenshot"
              className="size-full rounded-xl object-cover md:rounded-3xl"
            />
          </div>
          <Slider className="-bottom-2 left-25 md:left-20" position="bottom" />
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
        "absolute h-2 w-40 overflow-clip [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:h-2 md:w-80",
        className,
      )}
    >
      <motion.div
        variants={sliderVariants}
        animate={position === "top" ? "slideRight" : "slideLeft"}
        className="h-0.5 w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"
      />
    </div>
  );
};

export default HeroImg;
