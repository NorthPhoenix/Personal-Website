import "../styles/globals.css";
import type { AppProps } from "next/app";
import IntroTransition from "components/IntroTransition";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <IntroTransition>
            <Component {...pageProps} />
        </IntroTransition>
    );
}

export default MyApp;
