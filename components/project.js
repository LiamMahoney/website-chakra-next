import { Flex, Heading, Icon, IconButton, Link, Text, Tag, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";

export default function Project({ project }) {
    
    const iconColor = useColorModeValue('gray.600', 'gray.300');

    return (
        <Flex
            width="800px"
            maxWidth="90%"
            flexDirection="column"
            margin={8}
        > 
            <Flex
                justifyContent="space-between"
            >
                <Link 
                    href="https://beersheets.liammahoney.io"
                    isExternal={true}
                    _hover={{
                        textDecoration: "underline",
                        textDecorationThickness: "2px"
                    }}
                    _active="unset"
                    _focus="unset"
                >
                    <Heading size="2xl">
                        {project.attributes.Title}
                    </Heading>
                </Link>
                <Flex
                    alignItems="center"
                >
                    <Link
                        href={project.attributes.repository_url}
                        isExternal={true}
                        _active="unset"
                        _focus="unset"
                    >
                        <Icon 
                            as={AiOutlineGithub}
                            _hover={{color: iconColor}}
                            boxSize={8}
                        />
                    </Link>
                </Flex>
            </Flex>
            <Flex
                marginTop={4}
                justifyContent="space-between"
            >
                <Flex>
                    {project.attributes.project_tags.data.map((tag) => {
                        return (
                            <Tag 
                                key={tag.id}
                                marginRight={4}
                            >
                                {tag.attributes.technology}
                            </Tag>
                        )
                    })}
                </Flex> 
            </Flex>
            <Text
                marginTop={4}
            >
                {project.attributes.description}
            </Text>
        </Flex>
    )
}