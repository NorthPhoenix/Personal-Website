import IntroTransition from "components/IntroTransition";
import "../styles/globals.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
    title: "Nikta Istomin | Portfolio",
    description: "Nikta Istomin's portfolio website",
    image: "/design/logo.svg",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            {/* <IntroTransition> */}
            <body>{children}</body>
            {/* </IntroTransition> */}
        </html>
    );
}
