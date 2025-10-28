import React from "react";
import Heading from "@/components/Heading";
import JoinBtn from "@/components/JoinBtn";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-7xl p-6 py-10 lg:px-12">
      <span className="absolute inset-0 -top-1 left-96 h-[1.8px] w-lg overflow-clip bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"></span>
      <span className="absolute -top-1 left-85 h-3 w-xl overflow-clip bg-gradient-to-r bg-[image:radial-gradient(45%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] from-cyan-400/0 via-cyan-400 to-cyan-400/0 opacity-75"></span>
      <FooterPattern />
      <div className="absolute blur-3xl"></div>
      <section className="border-b-1 border-neutral-200/15 py-16 text-center">
        <div className="mx-auto mb-10 flex max-w-md flex-col gap-4">
          <Heading className="p-0.5 text-3xl/[1.1]">
            See where financial automation can take your business.
          </Heading>
          <p className="max-w-xl text-sm text-zinc-400/80">
            The first financial tool you&apos;ll love. And the last one
            you&apos;ll ever need.
          </p>
        </div>
        <JoinBtn>Join the waitlist</JoinBtn>
      </section>
      <section className="p-2">
        <div className="mt-2 mb-5 flex flex-row items-center justify-between py-2 text-sm font-bold text-neutral-400">
          <div className="flex flex-row items-center justify-start gap-x-6">
            <p>
              <Link href="#">
                &copy; 2023 Cobalt Financial Technologies Inc.
              </Link>
            </p>
            <p>
              <Link href="#">Privacy Policy</Link>
            </p>
            <p>
              <Link href="#">Terms of Use</Link>
            </p>
          </div>
          <div className="flex flex-row items-center justify-end gap-x-5">
            <p>
              <Link href="#">
                <Twitter size={20} />
              </Link>
            </p>
            <p>
              <Link href="#">
                <Linkedin size={20} />
              </Link>
            </p>
            <p>
              <Link href="#">
                <Facebook size={20} />
              </Link>
            </p>
          </div>
        </div>
        <div className="mb-2 max-w-2xl text-sm/[1.07] leading-5 font-medium text-neutral-400/50">
          <p className="mb-4">
            Cobalt is a trademark or registered trademark of Cobalt Financial
            Technologies Inc. Any other trademarks are the property of their
            respective owners. Unless otherwise noted, use of third party logos
            does not imply endorsement of, sponsorship of, or affiliation with
            Cobalt
          </p>
          <p>
            Cobalt is a financial technology company, not a bank. Banking
            services are provided by Celtic Bank and Evolve Bank & Trust,
            Members FDIC.
          </p>
        </div>
      </section>
    </footer>
  );
};

const FooterPattern = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-950 mask-t-from-40% [mask-image:radial-gradient(150%_150%_at_center,white,transparent,white,transparent)]">
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
          linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
        `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      {/* Your Content/Components */}
    </div>
  );
};

export default Footer;
