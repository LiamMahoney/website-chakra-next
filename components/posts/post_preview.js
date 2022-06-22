import { Flex, Heading, Link, Text, Tag, useColorModeValue } from "@chakra-ui/react";

export default function PostPreview({ post }) {
    const tagColor = useColorModeValue('tagBg.light', 'tagBg.dark');

    const publishedStr = new Date(post.attributes.publishedAt).toLocaleDateString({year: "2-digit"});

    return (
        <Flex
            width="100%"
            flexDirection="column"
            marginTop={4}
            marginBottom={4}
        > 
            <Flex
                justifyContent="space-between"
            >
                <Flex
                    flexDir="column"
                >
                    <Link 
                        href={`/posts/${post.attributes.slug}`}
                        _hover={{
                            textDecoration: "underline",
                            textDecorationThickness: "2px"
                        }}
                        _active="unset"
                        _focus="unset"
                    >
                        <Heading size="md">
                            {post.attributes.title}
                        </Heading>
                    </Link>
                    <Text
                        marginTop={2}
                    >
                        {post.attributes.description}
                    </Text>
                </Flex>
                <Flex
                    flexDir="column"
                    flexShrink={0}
                    marginLeft={1}
                >
                    <Flex
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Text fontSize={{'base': 'xs', 'md': 'sm'}}>
                            {publishedStr}
                        </Text>
                    </Flex>
                    <Flex
                        marginTop={1}
                        justifyContent="flex-start"
                        alignItems="flex-end"
                        flexDir="column"
                    >
                        {post.attributes.post_tags.data.map((tag) => {
                            return (
                                <Tag 
                                    key={tag.id}
                                    marginTop={1}
                                    size="sm"
                                    sx={{backgroundColor: tagColor}}
                                >
                                    {tag.attributes.name}
                                </Tag>
                            )
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}