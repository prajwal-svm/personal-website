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

          body {
            cursor: url('data:image/png;base64,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'), default !important;
          }

          .company-name, button, a, img {
            cursor:  url('data:image/png;base64,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'), default !important;
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
            background: transparent url('https://www.transparenttextures.com/patterns/stardust.png') repeat !important;
            background-size: contain;
            animation: shooting-stars 50s linear infinite;
          }

          .pattern {
            background: transparent url('https://www.transparenttextures.com/patterns/inspiration-geometry.png') repeat !important;
            background-size: contain;
            animation: shooting-stars 50s linear infinite;
          }


          .spinner {
            position: relative;
            width: 56px;
            height: 56px;
          }

          .spinner > div {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 13.4px solid rgba(34, 139, 34, 0.4); 
            position: absolute;
            top: 0;
            left: 0;
            animation: spinner-g7vlvwmd 0.65s linear infinite;
            z-index: 0;
          }

          .spinner > div::before {
            content: '';
            height: 13.4px;
            width: 13.4px;
            border-radius: 50%;
            background: #228B22; /* Forest green for the dot */
            position: absolute;
            top: 50%;
            animation: spinner-h1vps1md 1.3s infinite reverse steps(1);
            transform: translate(calc(2 * var(--translate-2)), calc(var(--translate) * 1%));
            z-index: 1;
          }

          .spinner > div:nth-of-type(1) {
            --translate: -50;
            --translate-2: calc(56px / 8);
          }

          .spinner > div:nth-of-type(1)::before {
            right: 0;
          }

          .spinner > div:nth-of-type(2) {
            --translate: 50;
            --translate-2: calc(-56px / 8);
            animation-delay: 0.65s;
            animation-direction: reverse;
            transform: translate(21.3px, 0);
          }

          .spinner > div:nth-of-type(2)::before {
            left: 0;
            transform: translate(calc(-56px / 4), -50%);
            animation-direction: normal;
          }

          @keyframes spinner-h1vps1md {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes spinner-g7vlvwmd {
            from {
              transform: translate(calc(var(--translate) * 1%), 0) translate(calc(var(--translate-2)), 0) rotate(0deg);
            }
            to {
              transform: translate(calc(var(--translate) * 1%), 0) translate(calc(var(--translate-2)), 0) rotate(360deg);
            }
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
