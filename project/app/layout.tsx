import "../styles/globals.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Metadata } from "next";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Nikta Istomin | Portfolio",
  description: "Nikta Istomin's portfolio website",
  generator: "Next.js",
  applicationName: "Nikita Istomin Portfolio Website",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "tsParticles",
    "Font Awesome",
    "Framer Motion",
    "Three.js",
    "Three Fiber",
    "Portfolio",
    "Personal Website",
  ],
  creator: "Nikita Istomin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='debug-screens'>{children}</body>
    </html>
  );
}
