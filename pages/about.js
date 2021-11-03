import { 
    Heading, 
    Flex, 
    Text, 
    ListItem, 
    UnorderedList, 
    Link,
    Icon
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
                    flexDirection="column"
                    paddingTop={8}
                >
                    <AboutSection>
                        <IconHeader icon={BsBriefcase}>
                            Work Experience
                        </IconHeader>
                        <Job 
                            employer="Oshkosh Corporation"
                            yearSpan="2017 -"
                        >
                            <JobPosition 
                                title="IT Information Security Engineer"
                                description="I work alongside the Incident Response team developing integrations between their SOAR platform and other security tools as well as assisting in creating existing playbooks to secuirty alerts within the platform."
                            />
                            <JobPosition
                                title="IT Information Security Intern"
                                description="Created a web application that interacted with the team's Vulnerability Management System to allow server owners to verify patches resolved vulnerabilities on thier systems."
                            />
                        </Job>
                    </AboutSection>
                    <AboutSection>
                        <IconHeader icon={BsBook}>
                            Education
                        </IconHeader>
                        <Flex
                            flexDirection="column"
                        >
                            <Flex alignItems="center" justifyContent="space-between">
                                <Heading size="md" marginBottom={2}>
                                    Univeristy of Wisconsin-Madison
                                </Heading>
                                <Heading size="sm">
                                    2015 - 2019 
                                </Heading>
                            </Flex>
                            <Text marginLeft={4}>
                                Bachelors of Business Administration (BBA), Information Systems
                            </Text>
                            <Text marginLeft={4}>
                                Certificate in Computer Science
                            </Text>
                        </Flex>
                    </AboutSection>
                    <AboutSection>
                        <IconHeader icon={BsBoxArrowUpRight}>
                            More Information
                        </IconHeader>
                        <Flex
                            flexDirection="column"
                            paddingLeft={4}
                        >
                            <Link
                                href="https://github.com/LiamMahoney"
                                isExternal={true}
                            >
                                Github
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/liamrmahoney/"
                                isExternal={true}
                            >
                                LinkedIn
                            </Link>
                        </Flex>
                    </AboutSection>
                </Flex>
            </Flex>
        </Page>
    )
}