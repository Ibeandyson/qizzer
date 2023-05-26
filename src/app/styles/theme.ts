import { extendTheme } from "@chakra-ui/react";

import fonts from "./customTheme/fonts";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "body",
        fontSize: "md",
        color: "black.700",
        fontFamily: '"Aeonik", sans-serif',
      },
    }),
  },
  fonts,
});

export default theme;
