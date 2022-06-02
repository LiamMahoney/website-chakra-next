import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head';
import theme from "../components/theme/theme";

export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" />
                <title>Liam Mahoney&#39;s Website</title>
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}