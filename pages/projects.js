import { Heading, Flex } from "@chakra-ui/react"
import Page from "../components/page";
import Project from "../components/project";

export default function Projects() {
    const projects = {
        "data": [
            {
                "id": 1,
                "attributes": {
                    "Title": "Beersheets Draft Assistant",
                    "repository_url": "https://github.com/LiamMahoney/beersheets-draft-assistant",
                    "url": "https://beersheets.liammahoney.io",
                    "description": "A draft assistant for fantasy football that leverages the beershets draft rankings from /r/fantasyfootball. Keeps track of players taken, which team they went to, along with having a draft board and roster views for each team.",
                    "createdAt": "2022-04-09T03:09:24.494Z",
                    "updatedAt": "2022-04-09T03:17:39.797Z",
                    "project_tags": {
                        "data": [
                            {
                                "id": 1,
                                "attributes": {
                                    "technology": "React",
                                    "createdAt": "2022-04-09T03:13:17.125Z",
                                    "updatedAt": "2022-04-09T03:13:17.125Z"
                                }
                            },
                            {
                                "id": 4,
                                "attributes": {
                                    "technology": "Chakra UI",
                                    "createdAt": "2022-04-09T03:17:32.456Z",
                                    "updatedAt": "2022-04-09T03:17:32.456Z"
                                }
                            }
                        ]
                    }
                }
            },
            {
                "id": 2,
                "attributes": {
                    "Title": "Catch the Box",
                    "repository_url": "https://github.com/LiamMahoney/mouse-movement",
                    "url": "https://catchbox.liammahoney.io",
                    "description": "A game where the objective is to get your cursor over a box that runs away from the cursor. If your cursor travels outside the border you lose. The shorter the time to catch the box the better the score.",
                    "createdAt": "2022-04-09T03:09:24.494Z",
                    "updatedAt": "2022-04-09T03:17:39.797Z",
                    "project_tags": {
                        "data": [
                            {
                                "id": 1,
                                "attributes": {
                                    "technology": "JavaScript",
                                    "createdAt": "2022-04-09T03:13:17.125Z",
                                    "updatedAt": "2022-04-09T03:13:17.125Z"
                                }
                            },
                            {
                                "id": 4,
                                "attributes": {
                                    "technology": "Express",
                                    "createdAt": "2022-04-09T03:17:32.456Z",
                                    "updatedAt": "2022-04-09T03:17:32.456Z"
                                }
                            },
                            {
                                "id": 5,
                                "attributes": {
                                    "technology": "Sqlite",
                                    "createdAt": "2022-04-09T03:17:32.456Z",
                                    "updatedAt": "2022-04-09T03:17:32.456Z"
                                }
                            }
                        ]
                    }
                }
            }
        ],
        "meta": {
            "pagination": {
                "page": 1,
                "pageSize": 25,
                "pageCount": 1,
                "total": 1
            }
        }
    };

    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                justifyContent="flex-start"
                alignItems="center"
                flexDir="column"
            >
                {/* <Project project={projects.data[0]} /> */}
                {
                    projects.data.map((project) => {
                        return (
                            <Project 
                                project={project} 
                                key={project.id}
                            />
                        )
                    })
                }
            </Flex>
        </Page>
    )
}