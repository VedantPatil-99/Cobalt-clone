import Heading from "@/components/Heading";
import Card from "@/components/Card";
import CardPack from "../components/CardPack";

const Product = () => {
  return (
    <section className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
      <div className="grid max-w-xl items-start justify-between gap-5">
        <Heading className="text-4xl/[1.07] md:text-5xl/[1.07]">
          Meet Genius
        </Heading>
        <p className="max-w-xl text-xl text-zinc-400/80">
          Our Al-driven assistant is designed to decode complex financial
          figures and
          <span className="mx-1.5 text-zinc-200">illuminate key trends</span>
          in your business.
        </p>
      </div>
      <section className="md:my-14">
        <CardPack className="grid-cols-2">
          <Card
            imgUrl="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            title="Smart forecasting"
            description="Harness the power of Cobalt's predictive analytics to map out the financial future of your business."
          />
          <Card
            imgUrl="https://images.unsplash.com/photo-1612696874005-d015469bc660?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=696"
            title="Chat with Genius"
            description="Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless."
          />
        </CardPack>
      </section>
    </section>
  );
};

export default Product;
