import {
    Flex
} from "@chakra-ui/react";

export default function AboutSection(props) {

    return (
        <Flex
            flexDirection="column"
            marginBottom={10}
        >
            {props.children}
        </Flex>
    );
}