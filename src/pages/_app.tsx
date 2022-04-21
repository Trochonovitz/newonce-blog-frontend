import "styles/globals.scss";
import type { AppProps } from "next/app";
import MainTemplate from "templates/MainTemplate/MainTemplate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  );
}

export default MyApp;
