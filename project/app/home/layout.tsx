import { atom } from "jotai";

const pageLoadedAtom = atom(false);

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export { pageLoadedAtom };
