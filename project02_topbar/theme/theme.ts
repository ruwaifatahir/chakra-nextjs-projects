import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      900: "#571F9C",
    },
  },

  components: {
    Text: {
      baseStyle: {
        // fontSize: "md",
      },
    },

    Divider: {
      defaultProps: { size: "md" },
      sizes: {
        lg: { borderWidth: "4px" },
        md: { borderWidth: "2px" },
        sm: { borderWidth: "1px" },
      },
    },
    // Icon: {
    //   baseStyle: {
    //     color: "white",
    //   },
    // },
  },
});
