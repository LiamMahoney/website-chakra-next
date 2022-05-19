import { Alert, AlertIcon, Flex } from "@chakra-ui/react";
import Page from "../components/page";
import PostPreview from "../components/post_preview";
import { getPosts } from "../lib/posts";


export default function Posts({ posts }) {

    console.log('posts ', posts);

    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                flexDir="column"
                alignItems="center"
            >
                <Flex
                    width="650px"
                    maxWidth="90%"
                    flexDir="column"
                    alignItems="center"
                >
                    {
                        posts ? 
                        posts.map((post) => {
                            return (
                                <PostPreview
                                    post={post} 
                                    key={post.id}
                                />
                            )
                        }) : posts === false ?
                        <Alert
                            status="error"
                            maxWidth="80%"
                            width="400px"
                            marginTop={8}
                        >
                            <AlertIcon />
                            Experienced an error
                        </Alert> : 
                        <Alert
                            status="warning"
                            maxWidth="80%"
                            width="400px"
                            marginTop={8}
                        >
                            <AlertIcon />
                            No posts created. Check back later
                        </Alert>
                    }
                </Flex>
            </Flex>
        </Page>
    )
}

export async function getStaticProps() {
    const posts = await getPosts();

    console.log('posts in getStatusProps ', posts);
    return {
        props: {
            posts
        }
    }
}