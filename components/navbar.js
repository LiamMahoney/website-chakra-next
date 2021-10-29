import { 
    Flex,
    Heading,
    useColorModeValue
} from "@chakra-ui/react";
import Link from "next/Link";
import NavbarLink from "./navbar_link";
import ColorModeSwitcher from "./color_mode_switcher"

export default function Navbar() {

    const backgroundColor = useColorModeValue("white", "gray.800");

    return (
        <Flex
            width="100%"
            height={12}
            position="sticky"
            top={0}
            backgroundColor={backgroundColor}
        >
            <Flex
                alignItems="center"
                justifyContent="center"
                flex={1}
            >
                <Heading
                    size="md"
                    userSelect="none"
                >
                    <Link href="/">
                    Liam Mahoney
                    </Link>
                </Heading>
            </Flex>
            <Flex
                flexGrow={1}
                alignItems="center"
                justifyContent="center"
            >
                <NavbarLink href="/about" text="About" />
                <NavbarLink href="/projects" text="Projects" />
                <NavbarLink href="/posts" text="Posts" />
            </Flex>
            <Flex 
                flex={1}
                alignItems="center"
                justifyContent="flex-end"
            >
                <ColorModeSwitcher 
                    marginRight={2}
                />
            </Flex>
        </Flex>
    )
} 