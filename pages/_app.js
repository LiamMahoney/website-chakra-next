import { ChakraProvider, theme } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}