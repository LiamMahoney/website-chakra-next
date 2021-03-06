import { useState, useEffect } from "react";
import { 
    Flex,
    Heading,
    Collapse,
    useColorModeValue
} from "@chakra-ui/react";
import {
    Squash as Hamburger
} from 'hamburger-react';
import Link from "next/link";
import NavbarLink from "./navbar_link";
import ColorModeSwitcher from "./color_mode_switcher"

export default function Navbar() {
    const [ isOpen, setOpen ] = useState(false);

    useEffect(() => {
        // disables body from being scrollable when mobile nav is expanded
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const backgroundColor = useColorModeValue("bg.light", "bg.dark");

    return (
        <>
            <Flex
                height={12}
                position="sticky"
                zIndex="sticky"
                top={0}
                width="100%"
                backgroundColor={backgroundColor}
            >
                <Flex
                    alignItems="center"
                    justifyContent={{base: "flex-start", md: "center"}}
                    marginLeft={{base: 4, md: 0}}
                    flex={1}
                >
                    <Heading
                        size="md"
                        userSelect="none"
                        zIndex={1000}
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
                    display={{base: "none", md: "flex"}}
                >
                    <NavbarLink href="/about" text="About" />
                    <NavbarLink href="/projects" text="Projects" />
                    <NavbarLink href="/posts" text="Posts" />
                </Flex>
                <Flex 
                    flex={1}
                    alignItems="center"
                    justifyContent="flex-end"
                    display={{base: "none", md: "flex"}}
                >
                    <ColorModeSwitcher 
                        marginRight={2}
                    />
                </Flex>
                <Flex
                    flex={1}
                    justifyContent="flex-end"
                    alignItems="center"
                    paddingRight={2}
                    display={{base: "flex", md: "none"}}
                    zIndex={1000}
                >
                    <Hamburger
                        toggled={isOpen}
                        toggle={() => setOpen(!isOpen)}
                        size={28}
                    />
                </Flex>
            </Flex>
            <Flex
                position="fixed"
                zIndex="dropdown"
            >
                <Collapse 
                    in={isOpen} 
                    endingHeight="100vh"
                    sx={{position: 'fixed'}}
                >
                    <Flex
                        height="100%"
                        flexDirection="column"
                        position="fixed"
                        top={0}
                        width="100vw"
                        backgroundColor={backgroundColor}
                    >
                        <Flex
                            flexGrow={1}
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                        >
                            <NavbarLink href="/about" text="About" mobile={true}/>
                            <NavbarLink href="/projects" text="Projects" mobile={true}/>
                            <NavbarLink href="/posts" text="Posts" mobile={true}/>
                        </Flex>
                        <Flex
                            justifyContent="flex-end"
                            flexGrow={0}
                        >
                            <ColorModeSwitcher 
                                marginRight={2}
                                marginBottom={2}
                            />
                        </Flex>
                    </Flex>
                </Collapse>
            </Flex>
        </>
    )
} 