import { Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

export default function DropDown({ display, setDisplay, headerValue, paddingBottom, paddingRight, paddingLeft, flexDirection, children }) {
    const ref = useRef();
    const popOverBackgroundColor = useColorModeValue('bg.light', '#212121');

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (display && ref.current && !ref.current.contains(e.target)) {
            setDisplay(false);
          }
        };
    
        document.addEventListener("click", checkIfClickedOutside);
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("click", checkIfClickedOutside);
        };
      }, [display, setDisplay]);

    return (
        <Flex
            display={display ? 'flex' : 'none'}
            position="absolute"
            justifyContent="flex-start"
            alignItems="flex-end"
            maxWidth="100%"
            backgroundColor={popOverBackgroundColor}
            flexDir="column"
            marginTop={2}
            boxShadow="base"
            borderRadius={10}
            paddingBottom={paddingBottom}
            paddingRight={paddingRight}
            paddingLeft={paddingLeft}
            right={0}
            ref={ref}
            userSelect="none"
        >
        { headerValue ? 
            <Heading 
                size="sm"
                paddingTop={4}
                paddingRight={4}
                marginBottom={2}
            >
                {headerValue}
            </Heading> :
            ''
        }

            <Flex
                flexWrap="wrap"
                flexDirection={flexDirection}
            >
                { children }
            </Flex>
        </Flex>
    )
}