import GridPattern from "../components/GridPattern";
export default function Home() {
  return (
    <>
      <main>
        <section className="relative isolate h-screen pt-14">
          <GradientBg />
          <GridPattern />
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
