import React from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme, {
  primaryBackgroundColor,
  primaryDarkColor,
} from "../styles/theme";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #233554;
            color: #ccd6f6;
          }
          ::-moz-selection {
            background: #233554;
            color: #ccd6f6;
          }

          ::-webkit-scrollbar {
            width: 4px;
          }

          ::-webkit-scrollbar-track {
            width: 6px;
            background: ${primaryBackgroundColor};
          }

          ::-webkit-scrollbar-thumb {
            background: ${primaryDarkColor};
            borderradius: 50px;
          }

          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light"
              ? "white"
              : primaryBackgroundColor};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: false,
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
