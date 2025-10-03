import GridPattern from "@/components/GridPattern";
import Heading from "@/components/Heading";
import JoinBtn from "@/components/JoinBtn";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";

const Landing = () => {
  return (
    <>
      <section className="relative isolate h-screen pt-14">
        <header className="absolute inset-x-0 top-0 z-10">
          <Navbar />
        </header>
        <GradientBg />
        <GridPattern />
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center pt-14 text-center">
          <Heading>Unleash the power of intuitive finance</Heading>
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

export const GradientBg = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full bg-[image:radial-gradient(80%_90%_at_50%_-20%,hsl(206,81.9%,65.3%,0.4),rgba(255,255,255,0))]"></div>
    </>
  );
};

export default Landing;
