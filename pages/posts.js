import { useState, useEffect } from "react";
import { Alert, AlertIcon, Flex } from "@chakra-ui/react";

import Page from "../components/page";
import PostPreview from "../components/posts/post_preview";
import TagFilter from "../components/posts/tag_filter";
import { getPosts } from "../lib/posts";

export default function Posts({ posts, tags }) {
    const [ postsDisplayed, setPostsDisplayed ] = useState(posts);
    const [ displayTagFilter, setDisplayTagFilter ] = useState(false);
    const [ selectedFilterTags, setSelectedFilterTags ] = useState([]);
    const [ titleFilter, setTitleFilter ] = useState('');

    const toggleTagFilterDisplay = () => {
        setDisplayTagFilter(!displayTagFilter);
    }

    const handleTagClick = (e) => {
        if (selectedFilterTags.indexOf(e.target.innerHTML) > -1) {
            // need to remove from active tag filters
            setSelectedFilterTags(selectedFilterTags.filter((element) => {
                return element === e.target.innerHTML ? false : true;
            }))
        } else {
            // filter was selected
            setSelectedFilterTags([...selectedFilterTags, e.target.innerHTML]);
        }
    }

    const handleTitleFilterChange = (e) => {
        setTitleFilter(e.target.value);
    }

    useEffect(() => {
        if (selectedFilterTags.length === 0 && titleFilter === '') {
            // neither filter has a value, display all posts
            setPostsDisplayed(posts);
        } else {
            // one of the filters has a value - filter posts

            // IDs of posts that are already goign to be displayed, helps speed
            // up filtering and prevents duplicate components rendering for the
            // same post
            let postIDsToDisplay = [];

            setPostsDisplayed(posts.reduce((acc, curr) => {
                // whether or not curr post is going to be displayed, if it's
                // going to be no need to check it again
                let currDisplayed = postIDsToDisplay.indexOf(curr.id) > -1;
                
                if (!currDisplayed) {
                    // only need to check post if it hasn't been determined that
                    // it should be displayed already
                    if (selectedFilterTags.length > 0) {
                        // if filter tag is selected then checking that the post
                        // has one of the selected tags - if title filter is
                        // supplied then only showing posts that match tag filter
                        // and title filter
                        curr.attributes.post_tags.data.forEach((tag) => {
                            if (selectedFilterTags.indexOf(tag.attributes.name) > -1 && !currDisplayed) {
                                if (titleFilter.length > 0) {
                                    // post has one of the selected filter tags but
                                    // title filter has value - display posts with
                                    // tags that also match title filter
                                    if (curr.attributes.title.toUpperCase().indexOf(titleFilter.toUpperCase()) > -1) {
                                        acc.push(curr);
                                        postIDsToDisplay.push(curr.attributes.id);
                                        currDisplayed = true;
                                    }
                                } else {
                                    // post has one of the selected filter tags and
                                    // no title filter - display posts that match
                                    // any tag filter
                                    acc.push(curr);
                                    postIDsToDisplay.push(curr.attributes.id);
                                    currDisplayed = true;
                                }
                                
                            }
                        });
                    } else if (titleFilter.length > 0) {
                        // checking if the title filter appears in the post's 
                        // title
                        if (curr.attributes.title.toUpperCase().indexOf(titleFilter.toUpperCase()) > -1) {
                            acc.push(curr);
                            postIDsToDisplay.push(curr.attributes.id);
                            currDisplayed = true;
                        }
                    }
                }

                return acc;
            }, []));
        }
    }, [selectedFilterTags, titleFilter, posts]);
    
    return (
        <Page>
            <Flex
                minHeight="100%"
                minWidth="100%"
                flexDir="column"
                alignItems="center"
            >
                <TagFilter 
                    tags={tags}
                    selectedFilterTags={selectedFilterTags}
                    handleTitleFilterChange={handleTitleFilterChange}
                    displayTagFilter={displayTagFilter}
                    toggleTagFilterDisplay={toggleTagFilterDisplay}
                    handleTagClick={handleTagClick}
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