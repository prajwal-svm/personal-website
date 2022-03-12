import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleFonts } from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {

    handleState() {
        window.splitbee.track("init | terminate")
    }

    componentDidMount() {
        window.addEventListener('load', this.handleState)
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleState)
    }

    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
                    <script async src="https://cdn.splitbee.io/sb.js"></script>
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}