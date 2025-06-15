import { HTMLAttributes } from "react";

export const Card = ({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = ({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`p-6 flex flex-col h-full justify-start ${className}`}
    {...props}
  >
    {children}
  </div>
);
