import { Link as ChakraLink, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function NavbarLink({ href, text, mobile}) {
    
    const linkText = mobile ? <Heading size="lg">{text}</Heading> : text;
    const linkMargin = mobile ? 4 : 0;

    return (
        <Box
            marginLeft={4}
            marginRight={4}
            marginTop={linkMargin}
        >
            <Link href={href} passHref>
                <ChakraLink _focus={{boxShadow: 'unset'}}>
                    {linkText}
                </ChakraLink>
            </Link>
        </Box>
    )
} 