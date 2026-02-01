import Heading from "@/components/Heading";

const Info = () => {
  return (
    <section
      id="explore-info-block"
      className="mx-auto max-w-7xl p-10 md:mt-20 md:py-24 lg:px-8"
    >
      <div className="mx-auto grid items-start justify-start gap-5 md:grid-cols-2">
        <Heading className="max-w-lg py-1 text-4xl/[1.07] md:text-5xl/[1.07]">
          Who said finance has to be boring?
        </Heading>
        <p className="text-md max-w-xl text-zinc-400/80 md:text-xl">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and puts the power of advanced financial management right at your
          fingertips.
          <span className="ms-1 text-zinc-200">
            Say no to spreadsheets and tools designed in the 80s.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Info;
