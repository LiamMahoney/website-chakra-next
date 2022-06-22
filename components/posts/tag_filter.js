import { Tag, useColorModeValue } from "@chakra-ui/react";
import DropDown from "../drop_down";

export default function TagFilter({ displayTagFilter, selectedFilterTags, handleTagClick, setDisplayTagFilter, tags}) {
    
    const popOverBackgroundColor = useColorModeValue('bg.light', '#212121');

    return (
        <DropDown
            display={displayTagFilter}
            setDisplay={setDisplayTagFilter}
            headerValue="Tags:"
            paddingBottom={10}
            paddingRight={4}
            paddingLeft={4}
            flexDirection="row"
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
        </DropDown>
    )
}