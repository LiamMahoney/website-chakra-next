import { Box, Flex, Input, InputGroup, InputLeftElement, Icon, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsFilter } from "react-icons/bs";
import { VscArrowSwap } from "react-icons/vsc";
import TagFilter from "./tag_filter";
import SortControl from "./sort_control";

export default function PostControl({ tags, posts, postsDisplayed, setPostsDisplayed }) {

    const [ displaySortControl, setDisplaySortControl ] = useState(false);
    const [ selectedFilterTags, setSelectedFilterTags ] = useState([]);
    const [ titleFilter, setTitleFilter ] = useState('');
    const [ displayTagFilter, setDisplayTagFilter ] = useState(false);


    const inputFocusBorderColor = useColorModeValue('#212121', 'bg.light');

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

            // IDs of posts that are already going to be displayed, helps speed
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
    }, [selectedFilterTags, titleFilter, posts, setPostsDisplayed]);

    return (
        <Box
            width="600px"
            maxWidth="90%"
            position="relative"
        >
            <Flex
                width="100%"
                alignItems="center"
                paddingTop={4}
                marginBottom={4}
                justifyContent="space-between"
            >
                <InputGroup
                    size="sm"
                    maxWidth="80%"
                    userSelect="none"
                >
                    <InputLeftElement
                        pointerEvents='none'
                    >
                        <SearchIcon />
                    </InputLeftElement>
                    <Input
                        borderRadius={10}
                        size="sm"
                        placeholder="Search Posts"
                        onChange={handleTitleFilterChange}
                        focusBorderColor={inputFocusBorderColor}
                    />
                </InputGroup>
                <Flex
                    alignItems="center"
                >
                    <Icon
                        as={ VscArrowSwap }
                        boxSize="1em"
                        onClick={ () => setDisplaySortControl((old) => !old)}
                        _hover={{ cursor: "pointer" }}
                        marginRight={1}
                        marginLeft={1}
                        transform="rotate(90deg)"
                    />
                    <Icon
                        as={ BsFilter }
                        boxSize="1.5em"
                        onClick={ () => setDisplayTagFilter((oldvalue) => !oldvalue) }
                        _hover={{cursor: "pointer"}}
                    />
                </Flex>
            </Flex>
            <SortControl 
                setDisplaySortControl={ setDisplaySortControl }
                displaySortControl={ displaySortControl }
                setPostsDisplayed={ setPostsDisplayed }
                postsDisplayed={ postsDisplayed}
            />
            <TagFilter
                tags={ tags }
                selectedFilterTags={ selectedFilterTags }
                displayTagFilter={ displayTagFilter }
                handleTagClick={ handleTagClick }
                setDisplayTagFilter={ setDisplayTagFilter} 
            />
        </Box>
    );
}