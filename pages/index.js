import { 
    Flex,
    Image,
    Text 
} from "@chakra-ui/react"
import Page from "../components/page";

export default function Home() {
    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                justifyContent="center"
                alignItems="center"
            >
                <Flex
                    maxWidth={{base: "90%", md: "900px"}}
                    flexDirection={{base: "column", md: "row"}}
                    alignItems="center"
                >
                    <Image 
                        src="/home.png" 
                        alt="Liam, his girlfriend and their dog"
                        width="450px"
                        borderRadius="xl"
                        padding="15px"
                    />
                    <Flex
                        flexDirection="column"
                        padding="15px"
                        justifyContent="center"
                    >
                        <Text marginBottom={6}>
                            Hi, I&apos;m Liam.
                        </Text>
                        <Text marginBottom={6}>
                            I&apos;m somewhere between an Information Security Engineer and Web Developer. I work alongside a Cybersecurity Incident Response Team building integrations between their SOAR platform and other security tools.
                        </Text>
                        <Text marginBottom={6}>
                            When I&apos;m not on a computer I&apos;m most likely playing with my dog or (trying to) grill on my Big Green Egg.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Page>
    )
}