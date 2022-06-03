import { extendTheme } from "@chakra-ui/react";
import textTheme from "./text";
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
    
}

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#F4FFF8', '#1C1C1C')(props)
            }
        })
    },
    components: {
        Text: textTheme,
    },
    colors: {
        bg: {
            light: '#F4FFF8',
            dark: '#1C1C1C'
        }
    }
});

export default theme;