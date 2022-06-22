import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function SortControlOption ({ label, borderTopRadius, borderBottomRadius, onClick }) {

    const backgroundColor = useColorModeValue( 'tagBg.light', 'tagBg.dark');

    return (
        <Flex
            _hover={
                {
                    backgroundColor: backgroundColor,
                    cursor: 'pointer'
                }
            }
            justifyContent="flex-start"
            alignItems="center"
            paddingTop={2}
            paddingBottom={2}
            paddingRight={14}
            paddingLeft={14}
            borderTopRadius={borderTopRadius}
            borderBottomRadius={borderBottomRadius}
            onClick={onClick}
        >
            {label}
        </Flex>
    )
}