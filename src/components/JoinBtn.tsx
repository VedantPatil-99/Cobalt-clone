import React from "react";

const JoinBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <button
        className="group hover:shadow-glow relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100"
        type="button"
        id="join-btn"
      >
        <span className="absolute inset-0 overflow-visible rounded-full">
          <span className="absolute -inset-[0.95px] rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
          {children}
        </div>
        <span className="absolute left-5 h-[1.5] w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </>
  );
};

export default JoinBtn;
