import { extendTheme } from "@chakra-ui/react";
import textTheme from "./text";
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#FFFDF5', '#1C1C1C')(props)
            }
        })
    },
    components: {
        Text: textTheme,
    },
    colors: {
        bg: {
            light: '#FFFDF5',
            dark: '#1C1C1C'
        }, 
        // not ideal but couldn't get Tag styling to work similarly to the Text component
        tagBg: {
            light: '#E6E4DC',
            dark: '#363636'
        }
    }
});

export default theme;