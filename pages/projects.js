import { 
    Flex, 
    Alert,
    AlertIcon
} from "@chakra-ui/react"
import Page from "../components/page";
import Project from "../components/project";
import getProjects from "../lib/get_projects";

export default function Projects({projects}) {

    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                justifyContent="flex-start"
                alignItems="center"
                flexDir="column"
            >
                {
                    projects ? 
                    projects.map((project) => {
                        return (
                            <Project 
                                project={project} 
                                key={project.id}
                            />
                        )
                    }) :
                    <Alert
                        status="error"
                        maxWidth="80%"
                        width="400px"
                        marginTop={8}
                    >
                        <AlertIcon />
                        Experienced an error
                    </Alert>
                }
            </Flex>
        </Page>
    )
}

export async function getStaticProps() {
    const projects = await getProjects();

    return {
        props: {
            projects
        }
    }
}