"use client";

import { atom } from "jotai";

export const pageLoadedAtom = atom(false);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
