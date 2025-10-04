import React from "react";
import Heading from "@/components/Heading";

const Info = () => {
  return (
    <section className="mx-auto my-20 max-w-7xl px-10 py-16 md:py-24 lg:px-8">
      <div className="mx-auto grid items-start justify-start gap-5 md:grid-cols-2">
        <Heading className="max-w-lg py-1 md:text-5xl">
          Who said finance has to be boring?
        </Heading>
        <p className="max-w-xl text-xl text-zinc-400/80">
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
