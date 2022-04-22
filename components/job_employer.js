import {
    Flex,
    Heading
} from "@chakra-ui/react";

export default function JobEmployer({name, yearSpan}) {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <Heading size="lg" marginBottom={1}>
                {name}
            </Heading>
            <Heading size="sm">
                {yearSpan}
            </Heading>
        </Flex>
    );
}