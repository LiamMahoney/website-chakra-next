import { Box, Flex, Input, InputGroup, InputLeftElement, Icon, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsFilter } from "react-icons/bs";
import TagFilter from "./tag_filter";

export default function PostFilter({ tags, selectedFilterTags, handleTitleFilterChange, displayTagFilter, setDisplayTagFilter, handleTagClick}) {

    const inputFocusBorderColor = useColorModeValue('#212121', 'bg.light');
    
    const toggleTagFilterDisplay = () => {
        setDisplayTagFilter((oldvalue) => !oldvalue);
    }

    return (
        <Box
            width="650px"
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
                <Icon
                    as={ BsFilter }
                    boxSize="1.5em"
                    onClick={ toggleTagFilterDisplay }
                    _hover={{cursor: "pointer"}}
                />
            </Flex>
            <TagFilter
                tags={tags}
                selectedFilterTags={selectedFilterTags}
                displayTagFilter={displayTagFilter}
                handleTagClick={handleTagClick}
                setDisplayTagFilter={setDisplayTagFilter}
            />
            
        </Box>
    );
}