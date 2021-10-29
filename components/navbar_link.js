import { Link as ChakraLink, Box } from "@chakra-ui/react";
import Link from "next/Link";

export default function NavbarLink({ href, text }) {
    return (
        <Box
            marginLeft={4}
            marginRight={4}
        >
            <Link href={href}>
                <ChakraLink>
                    {text}
                </ChakraLink>
            </Link>
        </Box>
    )
} 