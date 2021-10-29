import { Heading, Flex } from "@chakra-ui/react"
import Page from "../components/page";

export default function Projects() {
    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                justifyContent="center"
                alignItems="center"
            >
                <Heading>
                    Projects
                </Heading>
            </Flex>
        </Page>
    )
}