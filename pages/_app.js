import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head';
import theme from "../components/theme/theme";

export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}