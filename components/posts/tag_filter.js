import { Box, Heading, Flex, Input, InputGroup, InputLeftElement, Icon, Tag, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsFilter } from "react-icons/bs";

export default function TagFilter({ tags, selectedFilterTags, handleTitleFilterChange, displayTagFilter, toggleTagFilterDisplay, handleTagClick}) {
    
    const popOverBackgroundColor = useColorModeValue('bg.light', '#212121');
    const inputFocusBorderColor = useColorModeValue('#212121', 'bg.light');

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
            {/* TODO: make wrapping work propelry on smaller screens */}
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
        </Box>
    );
}