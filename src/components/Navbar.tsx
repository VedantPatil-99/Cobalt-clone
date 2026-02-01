import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import JoinBtn from "@/components/JoinBtn";

const Navbar = () => {
  return (
    <>
      <div id="navbar" className="relative flex justify-center">
        <div className="mx-4 w-full max-w-7xl">
          <nav className="flex min-h-20 items-center justify-between px-4 py-3">
            <div className="flex lg:flex-1">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-6 text-sm font-semibold text-neutral-300 hover:text-neutral-100">
              <Link href={"/blog"}>Blog</Link>
              <JoinBtn>Join the waitlist</JoinBtn>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
