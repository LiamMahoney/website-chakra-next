import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/Link";
import NavbarLink from "./navbar_link";

export default function Navbar() {
    return (
        <Flex
            width="100%"
            height={10}
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
            <Flex flex={1} />
        </Flex>
    )
} 