import {
    Flex,
    Heading,
    Icon
} from "@chakra-ui/react"

export default function IconHeader(props) {

    return (
        <Flex marginBottom={6} alignItems="center">
            <Heading display="flex" alignItems="center" marginRight={4}>
                <Icon as={props.icon} />
            </Heading>
            <Heading>{props.children}</Heading>
        </Flex>
    );
}