import GridPattern from "../components/GridPattern";
export default function Home() {
  return (
    <>
      <main>
        <section className="relative isolate h-screen pt-14">
          <GradientBg />
          <GridPattern />
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center pt-14 text-center">
            <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]">
              Unleash the power of intuitive finance
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium text-zinc-400 md:text-xl">
              Say goodbye to the outdated financial tools. Every small business
              owner, regardless of the background, can now manage their business
              like a pro. Simple. Intuitive. And never boring.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export const GradientBg = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full bg-[image:radial-gradient(80%_90%_at_50%_-20%,hsl(206,81.9%,65.3%,0.4),rgba(255,255,255,0))]"></div>
    </>
  );
};
