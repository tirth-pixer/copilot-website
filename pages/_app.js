import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import SEO from "../next-seo.config";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import { initAnalytics, setAnalyticUser } from "../services/analyticsService";
import { GTM_ID, pageview } from "../lib/gtm";
import Script from "next/script";
import { useRouter } from "next/router";

const GlobalStyle = createGlobalStyle`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Publicsans', sans-serif;
  }
  :root {
    --shadowColor: 0px 1px 3px rgba(10, 10, 46, 0.1), 0px 3px 14px rgba(10, 10, 46, 0.04), 0px 8px 32px rgba(10, 10, 46, 0.08), 0px 30px 84px rgba(10, 10, 46, 0.1);
    --shadowCard:  0px 3px 10px rgba(0, 0, 0, 0.1);
    --inputBoxShadow: 0 0 0 3px #afcdff;
  }
`;

const theme = {
  fontfamily: {
    Publicsans: "Publicsans",
    Gtwalsheimpro: "Gtwalsheimpro",
  },
  colors: {
    primary: "#3C7CE8",
    darkPrimary: "#2e69ce",
    textColor: "#1a1a1a",
    darkColor: "#000000",
    lightDark: "#333333",
    whiteColor: "#FFFFFF",
    borderColor: "#E4E4E5",
    placeholder: "#9E9E9E",
    lightBg: "#F1F3F9",
    romanSilver: "#7D8696",
    darkBlue: "#202632",
    manatee: "#949CAC",
    gainsboro: "#dfdfdf",
    arsenic: "#3F4450",
    eerieBlack: "#131823",
    mediumGray: "#C0C3CA",
    lightGray: "#EBEEF2",
    darkGray: "#595959",
    disable: "#DDDDDD",
    lotion: "#FAFAFA",
    water: "#D0F0FD",
    teaGreen: "#C4FFC1",
    Onyx: "#383838",
    romanSilver: "#868995",
    blackOlive: "#404040",
    ghostWhite: "#F9FBFF",
    antiFlashWhite: "#F2F2F2",
  },
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    initAnalytics();
    setAnalyticUser();
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <GlobalStyle />
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <ThemeProvider theme={theme}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </ThemeProvider>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}
