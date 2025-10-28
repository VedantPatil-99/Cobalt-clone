import Heading from "@/components/Heading";
import Card from "@/components/Card";
import CardPack from "../components/CardPack";
import IconShowcase from "@/components/IconShowCase";

const Explore = () => {
  return (
    <section className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
      <div className="grid max-w-xl items-start justify-between gap-5">
        <Heading className="text-4xl/[1.07] md:text-5xl/[1.07]">
          Everything you need. Nothing you don’t
        </Heading>
        <p className="max-w-xl text-xl text-zinc-400/80">
          Financial management and visibility in one place. Experience
          <span className="mx-1.5 text-zinc-200">a flexible toolkit</span>that
          makes every task feel like a breeze.
        </p>
      </div>
      <section className="md:my-10">
        <CardPack>
          <Card
            imgUrl="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            title="Insights at your fingertips"
            description="All your data and finances in one place to provide quick answers and make decisions instantly."
          />
          <Card
            imgUrl="https://images.unsplash.com/photo-1612696874005-d015469bc660?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=696"
            title="Manage in real time"
            description="Have full control of your business finances on
            the go using our iOS/Android mobile apps.
            Because, you know, it's 2023."
          />
          <Card
            imgUrl="https://images.unsplash.com/photo-1643845892686-30c241c3938c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"
            title="Important business alerts"
            description="Choose the alerts you need and receive them
            via email, mobile or Slack. Review and take
            action in one click."
          />
        </CardPack>
        <CardPack>
          <Card
            imgNode={<IconShowcase />}
            title="Connect all your apps"
            description="Bring your data with our built-in integration for accounting, revenue tools and banking."
            className="col-span-2"
          />
        </CardPack>
      </section>
    </section>
  );
};

export default Explore;
