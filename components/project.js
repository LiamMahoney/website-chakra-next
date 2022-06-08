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
                    <Heading size="md">
                        {project.attributes.Title}
                    </Heading>
                </Link>
                <Flex
                    alignItems="center"
                    justifyContent="flex-end"
                    flexGrow={1}
                >
                    <Link
                        href={project.attributes.repository_url}
                        isExternal={true}
                        _active="unset"
                        _focus="unset"
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
                marginTop={0}
                justifyContent="flex-start"
            >
                {project.attributes.project_tags.data.map((tag) => {
                    return (
                        <Tag 
                            key={tag.id}
                            marginRight={4}
                            size="sm"
                            sx={{backgroundColor: tagColor}}
                        >
                            {tag.attributes.technology}
                        </Tag>
                    )
                })}
            </Flex>
            <Text
                marginTop={1}
            >
                {project.attributes.description}
            </Text>
        </Flex>
    )
}