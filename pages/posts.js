import { useState, useEffect } from "react";
import { Alert, AlertIcon, Flex } from "@chakra-ui/react";
import Page from "../components/page";
import PostPreview from "../components/posts/post_preview";
import PostControl from "../components/posts/post_control";
import { getPosts } from "../lib/posts";

export default function Posts({ posts, tags }) {

    const [ postsDisplayed, setPostsDisplayed ] = useState(posts);
    
    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                flexDir="column"
                alignItems="center"
            >
                <PostControl 
                    tags={tags}
                    posts={posts}
                    setPostsDisplayed={setPostsDisplayed}
                    postsDisplayed={postsDisplayed}
                />
                <Flex
                    width="650px"
                    maxWidth="90%"
                    flexDir="column"
                    alignItems="center"
                >
                    {
                        postsDisplayed ? 
                        postsDisplayed.map((post) => {
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

    // unique tags from posts
    const tags = posts.reduce((acc, curr) => {
        curr.attributes.post_tags.data.forEach(element => {
            if (acc.indexOf(element.attributes.name) === -1) {
                acc.push(element.attributes.name);
            }
        });
        return acc;
    }, []);

    return {
        props: {
            posts,
            tags
        }
    }
}