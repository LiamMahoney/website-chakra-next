import { Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";


export default function Footer() {

    const iconColor = useColorModeValue('gray.600', 'gray.300');

    return (
        <Flex
            paddingTop={4}
            paddingBottom={4}
            paddingRight={2}
            justifyContent="flex-end"
            alignItems="center"
        >
            <Link
                href="https://www.linkedin.com/in/liamrmahoney"
                isExternal={true}
                _active="unset"
                _focus="unset"
                marginRight={4}
            >
                <Icon 
                    as={AiOutlineLinkedin}
                    _hover={{color: iconColor}}
                    boxSize={6}
                />
            </Link>
            <Link
                href="https://github.com/LiamMahoney"
                isExternal={true}
                _active="unset"
                _focus="unset"
                marginRight={2}
            >
                <Icon 
                    as={AiOutlineGithub}
                    _hover={{color: iconColor}}
                    boxSize={6}
                />
            </Link>
        </Flex>
    );
}