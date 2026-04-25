import React from "react";
import clsx from "clsx";

export function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

