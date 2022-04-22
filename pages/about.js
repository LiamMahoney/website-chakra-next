import { 
    Heading, 
    Flex, 
    Text, 
    Link,
    Box
} from "@chakra-ui/react"
import {
    BsBoxArrowUpRight,
    BsBriefcase,
    BsBook
} from "react-icons/bs";
import IconHeader from "../components/icon_header";
import AboutSection from "../components/about_section";
import Page from "../components/page";
import Job from "../components/job";
import JobPosition from "../components/job_position";

export default function About() {
    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Flex
                    width="800px"
                    maxWidth="90%"
                    flexDirection="column"
                    paddingTop={8}
                >
                    <AboutSection>
                        <Heading
                            size="2xl"
                            marginBottom={6}
                        >
                            Work Experience
                        </Heading>
                        <Job 
                            employer="Oshkosh Corporation"
                            yearSpan="2017 -"
                        >
                            <JobPosition
                                title="IT Information Security Engineer Sr."
                                description="Continuing to develop integrations for our SOAR platform and assisting in other automation efforts within the Cybersecurity team."
                            />
                            <JobPosition 
                                title="IT Information Security Engineer"
                                description="Developed integrations between our SOAR platform and other security tools and assisted in porting cybersecurity alert response playbooks into the SOAR platform."
                            />
                            <JobPosition
                                title="IT Information Security Intern"
                                description="Created a web application that interacted with the team's Vulnerability Management System to allow server owners to verify patches resolved vulnerabilities on their systems."
                            />
                        </Job>
                    </AboutSection>
                    <AboutSection>
                        <Heading
                            size="2xl"
                            marginBottom={6}
                        >
                            Education
                        </Heading>
                        <Flex
                            flexDirection="column"
                        >
                            <Flex alignItems="center" justifyContent="space-between" marginBottom={2}>
                                <Heading size="lg">
                                    Univeristy of Wisconsin-Madison
                                </Heading>
                                <Heading size="sm">
                                    2015 - 2019 
                                </Heading>
                            </Flex>
                            <Text marginLeft={8}>
                                Bachelors of Business Administration (BBA), Information Systems
                            </Text>
                            <Text marginLeft={8} marginTop={1}>
                                Certificate in Computer Science
                            </Text>
                        </Flex>
                    </AboutSection>
                    <AboutSection>
                        <Heading
                            size="2xl"
                            marginBottom={6}
                        >
                            More Information
                        </Heading>
                        <Flex
                            flexDirection="column"
                        >
                            <Box>
                                <Link
                                    href="https://github.com/LiamMahoney"
                                    isExternal={true}
                                >
                                    Github
                                </Link>
                            </Box>
                            <Box>
                                <Link 
                                    href="https://www.linkedin.com/in/liamrmahoney/"
                                    isExternal={true}
                                >
                                    LinkedIn
                                </Link>
                            </Box>
                        </Flex>
                    </AboutSection>
                </Flex>
            </Flex>
        </Page>
    )
}