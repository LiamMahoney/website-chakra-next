import { Flex, Heading, Icon, Link, Text, Tag, useColorModeValue } from "@chakra-ui/react";
import { BsCode } from "react-icons/bs";

export default function Project({ project }) {
    
    const iconColor = useColorModeValue('gray.600', 'gray.300');
    const tagColor = useColorModeValue('tagBg.light', 'tagBg.dark');

    return (
        <Flex
            width="600px"
            maxWidth="90%"
            flexDirection="column"
            margin={8}
        > 
            <Flex 
                justifyContent="space-between"
                flexDirection={{'base': 'column', 'md': 'row'}}
                alignItems={{'base': 'flex-start', 'md': 'flex-end'}}
            >
                <Flex
                    justifyContent="space-between"
                    width="100%"
                >
                    <Link 
                        href={project.attributes.url}
                        isExternal={true}
                        _hover={{
                            textDecoration: "underline",
                            textDecorationThickness: "2px"
                        }}
                        _active="unset"
                        _focus="unset"
                    >
                        <Heading size="md">
                            {project.attributes.Title}
                        </Heading>
                    </Link>
                    <Link
                        href={project.attributes.repository_url}
                        isExternal={true}
                        _active="unset"
                        _focus="unset"
                        height={6}
                    >
                        <Icon 
                            as={BsCode}
                            _hover={{color: iconColor}}
                            boxSize={6}
                        />
                    </Link>
                </Flex>
            </Flex>
            <Flex
                flexWrap={{'base': 'wrap-reverse', 'md': 'nowrap'}}
                justifyContent={{'md': 'space-between'}}
            >
                <Text
                    marginTop={{'base': 1, 'md': 2}}
                    width={{'base': '100%', 'md': 'auto'}}
                >
                    {project.attributes.description}
                </Text>
                <Flex
                    marginTop={{'base': 1, 'md': 0}}
                    flexDir={{'base': 'row', 'md': 'column'}}
                    flexShrink={{'md': 0}}
                    alignItems={{'base': 'flex-start', 'md': 'flex-end'}}
                >
                    {project.attributes.project_tags.data.map((tag) => {
                        return (
                            <Tag 
                                key={tag.id}
                                marginTop={{'base': 0, 'md': 1}}
                                marginRight={{'base': 1, 'md': 0}}                                size="sm"
                                sx={{backgroundColor: tagColor}}
                            >
                                {tag.attributes.technology}
                            </Tag>
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}