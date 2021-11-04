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

    const backgroundColor = useColorModeValue("white", "gray.800");
    // either whole screen or just navbar height
    const mobileHeight = isOpen ? "100vh" : 12
    // want sticky when the mobile navbar is not extended so it can be used to
    // calculate the rest of the available screen size
    const positionValue = isOpen ? "fixed" : "sticky"

    return (
        <Flex
            height={mobileHeight}
            flexDirection="column"
            position={positionValue}
            zIndex={100}
            top={0}
            width="100%"
            backgroundColor={backgroundColor}
        >
            <Flex
                height={12}
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
                >
                    <Hamburger
                        toggled={isOpen}
                        toggle={() => setOpen(!isOpen)}
                        size={28}
                    />
                </Flex>
            </Flex>
            <Collapse in={isOpen} endingHeight="100%">
                <Flex
                    height="100%"
                    flexDirection="column"
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
    )
} 