"use client";
import React from "react";

export const ButtonsCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative z-40">
      <button className="relative inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a654f5_0%,#6502c2_50%,#a654f5_100%)]" />
        <span className="flex items-center gap-5 p-3 h-full w-96 cursor-pointer rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:animate-pulse">
          {children}
        </span>
      </button>
    </div>
  );
};
