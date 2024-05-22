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
            width: 6px;
            height: 6px;
            border-radius: 50px;
          }

          ::-webkit-scrollbar-track {
            width: 6px;
            background: ${primaryBackgroundColor};
          }

          ::-webkit-scrollbar-thumb {
            background: ${primaryDarkColor};
            border-radius: 50px;
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

            background-image: linear-gradient(to right, #111928bf 1px, transparent 1px), 
                            linear-gradient(to bottom, #111928bf 1px, transparent 1px);
          background-size: 100px 100px;

            .css-1ieeump{
              background: ${colorMode === "light"
            ? "white"
            : primaryBackgroundColor};
            }
          }

          .chakra-stack {
            opacity: 0;
            filter: blur(8px);
            transition: opacity 1s ease-out, filter 0.5s ease-out;
          }

          footer {
            opacity: 1 !important;
            filter: blur(0) !important;
          }

          .show-section,  {
            opacity: 1;
            filter: blur(0);
          }

          @media(prefers-reduced-motion) {
            .show-section, .chakra-stack {
              transition: none;
            }
          }

          img {
            filter: contrast(1.1);
          }
         

          .masonry-grid {
            display: -webkit-box; 
            display: -ms-flexbox; 
            display: flex;
            margin-left: -30px; 
            width: auto;
            
          }
          .masonry-grid_column {
            padding-left: 30px; 
            background-clip: padding-box;
          }
        
          .masonry-grid_column > div {
            margin-bottom: 30px;
          }

          @keyframes shooting-stars {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: -10000px 5000px;
            }
          }
          
          .shooting-stars {
            background: #000 url('https://www.transparenttextures.com/patterns/stardust.png') repeat;
            background-size: contain;
            animation: shooting-stars 50s linear infinite;
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
