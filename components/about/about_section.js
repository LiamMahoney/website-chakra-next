import {
    Flex
} from "@chakra-ui/react";

export default function AboutSection(props) {

    return (
        <Flex
            flexDirection="column"
            marginBottom={20}
        >
            {props.children}
        </Flex>
    );
}