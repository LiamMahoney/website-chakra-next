import { Heading, Flex } from "@chakra-ui/react"
import Page from "../components/page";

export default function Posts() {
    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                justifyContent="center"
                alignItems="center"
            >
                <Heading>
                    Posts
                </Heading>
            </Flex>
        </Page>
    )
}