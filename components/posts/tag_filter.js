import { Heading, Flex, Tag, useColorModeValue } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

export default function TagFilter({ displayTagFilter, selectedFilterTags, handleTagClick, setDisplayTagFilter, tags}) {
    const ref = useRef();
    const popOverBackgroundColor = useColorModeValue('bg.light', '#212121');

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (displayTagFilter && ref.current && !ref.current.contains(e.target)) {
            setDisplayTagFilter(false);
          }
        };
    
        document.addEventListener("click", checkIfClickedOutside);
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("click", checkIfClickedOutside);
        };
      }, [displayTagFilter, setDisplayTagFilter]);

    return (
        <Flex
            display={displayTagFilter ? 'flex' : 'none'}
            position="absolute"
            justifyContent="flex-start"
            alignItems="flex-end"
            maxWidth="100%"
            backgroundColor={popOverBackgroundColor}
            flexDir="column"
            paddingBottom={10}
            marginTop={2}
            boxShadow="base"
            borderRadius={10}
            paddingRight={4}
            paddingLeft={4}
            right={0}
            ref={ref}
        >
            <Heading 
                size="sm"
                paddingTop={4}
                paddingRight={4}
            >
                Tags:
            </Heading>
            <Flex
                marginTop={2}
                flexWrap="wrap"
            >
                {
                    tags.map((tag) => {
                        return selectedFilterTags.indexOf(tag) > -1 ? 
                        (<Tag
                            colorScheme="green"
                            key={tag}
                            onClick={handleTagClick}
                            marginTop={2}
                            marginRight={2}
                            marginLeft={2}
                            _hover={{cursor: "pointer"}}
                            size="sm"
                        >
                            { tag }
                        </Tag>) :
                        (<Tag
                            colorScheme="red"
                            key={tag}
                            onClick={handleTagClick}
                            marginTop={2}
                            marginLeft={2}
                            marginRight={2}
                            _hover={{cursor: "pointer"}}
                            size="sm"
                        >
                            { tag }
                        </Tag>)
                    })
                }
            </Flex>
        </Flex>
    )
}