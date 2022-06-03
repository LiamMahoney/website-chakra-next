import { Flex, Heading, Link, Text, Tag, useColorModeValue } from "@chakra-ui/react";

export default function PostPreview({ post }) {
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
                    href={`/posts/${post.attributes.slug}`}
                    _hover={{
                        textDecoration: "underline",
                        textDecorationThickness: "2px"
                    }}
                    _active="unset"
                    _focus="unset"
                >
                    <Heading size="lg">
                        {post.attributes.title}
                    </Heading>
                </Link>
                <Flex
                    alignItems="center"
                >
                    <Text fontSize={{'base': 'xs', 'md': 'sm'}}>
                        {post.attributes.publish_date}
                    </Text>
                </Flex>
            </Flex>
            <Flex
                marginTop={1}
                justifyContent="flex-start"
            >
                {post.attributes.post_tags.data.map((tag) => {
                    return (
                        <Tag 
                            key={tag.id}
                            marginRight={4}
                            size="sm"
                            sx={{backgroundColor: tagColor}}
                        >
                            {tag.attributes.name}
                        </Tag>
                    )
                })}
            </Flex>
            <Text
                marginTop={2}
            >
                {post.attributes.description}
            </Text>
        </Flex>
    )
}