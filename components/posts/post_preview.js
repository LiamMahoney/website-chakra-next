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
                flexDirection={{'base': 'column', 'md': 'row'}}
                alignItems={{'base': 'flex-start', 'md': 'flex-end'}}
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
                <Text fontSize={{'base': 'xs', 'md': 'sm'}}>
                    {publishedStr}
                </Text>
            </Flex>
            <Flex
                flexWrap={{'base': 'wrap-reverse', 'md': 'nowrap'}}
                justifyContent={{'md': "space-between"}}
            >
                <Text
                    marginTop={{'base': 1, 'md': 2}}
                    width={{'base': '100%', 'md': 'auto'}}
                >
                    {post.attributes.description}
                </Text>
                <Flex
                    marginTop={{'base': 1, 'md': 0}}
                    flexDir={{'base': 'row', 'md': 'column'}}
                    flexShrink={{'md': 0}}
                    alignItems={{'base': 'flex-start', 'md': 'flex-end'}}
                >
                    {post.attributes.post_tags.data.map((tag) => {
                        return (
                            <Tag 
                                key={tag.id}
                                marginTop={{'base': 0, 'md': 1}}
                                marginRight={{'base': 1, 'md': 0}}
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
    )
}