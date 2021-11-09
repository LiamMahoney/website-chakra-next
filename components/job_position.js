import {
    Flex,
    Heading,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

export default function JobPosition({title, description}) {

    const descColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Flex flexDirection="column" marginTop={3} paddingLeft={{md: 4}}>
            <Heading size="sm">
                {title}
            </Heading>
            <Text marginLeft={4} color={descColor} marginTop={2}>
                {description}
            </Text>
        </Flex>
    );
}