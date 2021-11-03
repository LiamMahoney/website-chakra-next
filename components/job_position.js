import {
    Flex,
    Heading,
    Text
} from "@chakra-ui/react";

export default function JobPosition({title, description}) {

    return (
        <Flex flexDirection="column" marginTop={3} paddingLeft={4}>
            <Heading size="sm">
                {title}
            </Heading>
            <Text marginLeft={4}>
                {description}
            </Text>
        </Flex>
    );
}