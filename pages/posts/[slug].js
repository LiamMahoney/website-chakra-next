import { 
    Box,
    Flex,
    Heading,
    Link,
    Text,
    Code,
    Divider,
    Image,
    UnorderedList,
    ListItem,
    OrderedList,
    Tag,
    useColorModeValue
} from "@chakra-ui/react"
import Page from "../../components/page";
import { getPostBySlug, getPosts } from "../../lib/posts";
import ReactMarkdown from "react-markdown";

export default function Post({post}) {

    const tagColor = useColorModeValue('tagBg.light', 'tagBg.dark');

    //TODO: create blockquote component
    const componentMap = {
        a: Link,
        code: Code,
        em: (props) => <Text as="i">{props.children}</Text>,
        h1: (props) => <Heading marginTop={4} marginBottom={4} size="lg">{props.children}</Heading>,
        h2: (props) => <Heading marginTop={4} marginBottom={4} size="md">{props.children}</Heading>,
        h3: (props) => <Heading marginTop={4} marginBottom={4} size="sm">{props.children}</Heading>,
        h4: (props) => <Heading marginTop={4} marginBottom={4} size="xs">{props.children}</Heading>,
        h5: (props) => <Heading marginTop={4} marginBottom={4} size="xs">{props.children}</Heading>,
        h6: (props) => <Heading marginTop={4} marginBottom={4} size="xs">{props.children}</Heading>,
        hr: Divider,
        img: (props) => <Image src={props.src} alt={props.title} />,
        li: ListItem,
        ol: OrderedList,
        p: (props) => <Text marginTop={2} marginBottom={2}>{props.children}</Text>,
        strong: (props) => <Text as="strong">{props.children}</Text>,
        ul: UnorderedList
    }

    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
            >
                <Flex
                    maxWidth="90%"
                    width="600px"
                    flexDir="column"
                    alignItems="flex-start"
                    paddingBottom={10}
                >
                    <Flex
                        marginTop={6}
                        marginBottom={1}
                        justifyContent="space-between"
                        width="100%"
                        alignItems="center"
                        flexDir={{'base': 'column', 'md': 'row'}}
                    >
                        <Heading
                            size="xl"
                        >
                            {post.attributes.title}
                        </Heading>
                        <Text
                            fontSize="sm"
                        >
                            {post.attributes.publish_date}
                        </Text>
                    </Flex>
                    <Flex 
                        justifyContent={{'base': 'center', 'md': 'flex-start'}} 
                        marginBottom={6}
                        width="100%"
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
     
                    <ReactMarkdown 
                        components={componentMap}
                    >
                        { post.attributes.content }
                    </ReactMarkdown>
                </Flex>
            </Flex>
        </Page>
    )
}

export async function getStaticPaths() { 
    try {
        const posts = await getPosts();

        const paths = posts.map((post) => ({
            params: {
                slug: post.attributes.slug
            }
        }));

        return { paths, fallback: false }

    } catch (err) {
        console.error(err);
    }
}

export async function getStaticProps({ params }) {
    try {
        const post = await getPostBySlug(params.slug);

        return { props: { post }}
    } catch (err) {
        console.error(err);
    }
}