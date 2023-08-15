import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  className?: string;
};

const NierButton = ({ className, label, ...attr }: ButtonProps) => {
  return (
    <button
      {...attr}
      className={twMerge(
        "relative p-2 text-base bg-nier-400 text-nier-700 active:text-nier-700 font-helvetica cursor-pointer shadow-md transition duration-200 text-center whitespace-nowrap hover:bg-transparent hover:text-nier-200 before:content-[''] before:absolute before:inset-0 before:transition-all before:duration-200 before:hover:-top-1 before:hover:-bottom-1 before:hover:border-y-[0.1rem] before:border-transparent before:hover:border-nier-700 after:content-[''] after:absolute after:left-0 after:top-0 after:bottom-0 after:transition-all after:duration-200 before:z-[1] after:-z-[1] after:bg-nier-700 after:w-0 after:hover:w-full after:active:bg-nier-200",
        className
      )}>
      {label}
    </button>
  );
};

export default NierButton;
