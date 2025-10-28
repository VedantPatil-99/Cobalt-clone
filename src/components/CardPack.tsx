import React from "react";

const CardPack = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-6 grid grid-cols-3 gap-10">{children} </div>;
};

export default CardPack;
