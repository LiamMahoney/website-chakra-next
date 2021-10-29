import { Heading, Flex } from "@chakra-ui/react"
import Page from "../components/page";

export default function About() {
    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                justifyContent="center"
                alignItems="center"
            >
                <Heading>
                    About
                </Heading>
            </Flex>
        </Page>
    )
}