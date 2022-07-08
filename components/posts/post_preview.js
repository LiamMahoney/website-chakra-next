import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export default function PostPreview({ post }) {

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
           
            </Flex>
            <Flex
                justifyContent="space-between"
            >
                <Text fontSize={{'base': 'xs', 'md': 'sm'}}>
                    {publishedStr}
                </Text>
                <Flex
                    alignItems="center"
                    marginLeft={2}
                >
                    <ViewIcon boxSize={{'base': '.8em', 'md': '1em'}}/>
                    <Text 
                        fontSize={{'base': 'xs', 'md': 'sm'}}
                        marginLeft={1}    
                    >
                        {post.attributes.views}
                    </Text>
                </Flex>
            </Flex>
            <Flex
                flexWrap={{'base': 'wrap-reverse', 'md': 'nowrap'}}
                justifyContent={{'md': "space-between"}}
            >
                <Text
                    marginTop={{'base': 1, 'md': 1}}
                    width={{'base': '100%', 'md': 'auto'}}
                >
                    {post.attributes.description}
                </Text>
            </Flex>
        </Flex>
    )
}