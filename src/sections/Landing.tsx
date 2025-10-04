import GradientBg from "@/components/GradientBg";
import GridPattern from "@/components/GridPattern";
import Heading from "@/components/Heading";
import JoinBtn from "@/components/JoinBtn";
import Navbar from "@/components/Navbar";
import { ArrowDown } from "lucide-react";

const Landing = () => {
  return (
    <>
      <section className="relative px-10 pt-14">
        <header className="absolute inset-x-0 top-0 z-10">
          <Navbar />
        </header>
        <GradientBg />
        <GridPattern />
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center pt-14 text-center">
          <Heading className="text-5xl/[1.07] md:text-7xl/[1.07]">
            Unleash the power of intuitive finance
          </Heading>
          <p className="mt-6 max-w-2xl text-lg/[1.5] font-medium text-zinc-400 md:text-xl/[1.5]">
            Say goodbye to the outdated financial tools. Every small business
            owner, regardless of the background, can now manage their business
            like a pro. Simple. Intuitive. And never boring.
          </p>
          <div className="mt-10 flex flex-col items-center justify-between gap-8">
            <JoinBtn>Join the waitlist</JoinBtn>
            <a
              href="#info"
              className="group flex flex-col items-center text-zinc-400"
            >
              <span className="text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-300 ease-in-out group-hover:text-zinc-50">
                Learn more
              </span>
              <div className="mt-1 transition-transform duration-300 ease-in-out group-hover:translate-y-2">
                <ArrowDown className="size-4" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
