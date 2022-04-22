import { extendTheme } from "@chakra-ui/react";
import textTheme from "./text";

const overrides = {
    components: {
        Text: textTheme
    }
}

const theme = extendTheme(overrides);
export default theme;