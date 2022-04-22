import {
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";

export default function JobPosition({title, description}) {

    return (
        <Flex flexDirection="column" marginTop={3} >
            <Heading size="sm">
                {title}
            </Heading>
            <Text marginLeft={8} marginTop={2}>
                {description}
            </Text>
        </Flex>
    );
}