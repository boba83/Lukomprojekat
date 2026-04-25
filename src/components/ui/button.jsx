import React from "react";
import clsx from "clsx";

export default function Button({
  className,
  variant = "default",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    outline:
      "border border-slate-200 text-slate-800 bg-white hover:bg-slate-50",
  };

  return (
    <button
      className={clsx(base, variants[variant] || variants.default, className)}
      {...props}
    >
      {children}
    </button>
  );
}

