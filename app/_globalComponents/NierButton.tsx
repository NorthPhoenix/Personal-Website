import { twMerge } from "tailwind-merge";

type ValidTag = "button" | "a";

type Props<Tag extends keyof JSX.IntrinsicElements> = {
  as?: ValidTag;
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements[Tag];

/**
 * Make the default tag a constant to make it easy to infer both the default
 * generic parameter and the `tag` prop
 */
const DEFAULT_TAG = "button" as const;

// Use the default `div` tag for both the generic parameter and `tag` prop
const NierButton = <T extends keyof JSX.IntrinsicElements>({
  as = DEFAULT_TAG,
  children,
  className,
  ...args
}: Props<T>) => {
  const Wraper = as;
  return (
    <Wraper
      className={twMerge(
        "relative p-2 text-base bg-nier-400 text-nier-700 active:text-nier-700 font-helvetica cursor-pointer shadow-md transition duration-200 text-center whitespace-nowrap hover:bg-transparent hover:text-nier-200 before:content-[''] before:absolute before:inset-0 before:transition-all before:duration-200 before:hover:-top-1 before:hover:-bottom-1 before:hover:border-y-[0.1rem] before:border-transparent before:hover:border-nier-700 after:content-[''] after:absolute after:left-0 after:top-0 after:bottom-0 after:transition-all after:duration-200 before:z-[1] after:-z-[1] after:bg-nier-700 after:w-0 after:hover:w-full after:active:bg-nier-200",
        className
      )}
      {...args}>
      {children}
    </Wraper>
  );
};

export default NierButton;
