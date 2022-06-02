import { Flex } from "@chakra-ui/react"
import Navbar from './navbar';
import Footer from './footer';

export default function Page(props) {
    return (
        <>
            <Flex
                minHeight="100vh"
                minWidth="100vw"
                flexDirection="column"
            >
                <Navbar />
                <Flex
                    flexGrow={1}
                >
                    {props.children}
                </Flex>
                <Footer />
            </Flex>
        </>
    )
}