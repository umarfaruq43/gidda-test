// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    goldenColor: "#D49633",
    black: "#000000",
    black_200: "#D9D9D9",
    black_300: "#292D32",
    black_400: "#14142B",
    black_500: "rgba(0, 0, 0, 0.45)",
    black_600: "#707685",
    fadeGray: "#F2F2F2",
    fadeGray_1: "#F3F6F8",
    fadeGray_2: "#83A0B5",
    light_1: "#EBE8E8",
    light_2: "#959595",
    light_3: "#5A5A5A",
    light_4: "#555555",
    light_5: "#D8D6DE",
    light_6: "rgba(234, 234, 234, 0.21)",
    light_7: "#606060",
    light_8: "#A0A0A0",
    light_9: "#F8F7F7",
    light_10: "rgba(255, 255, 255, 0.7)",
    light_20: "#615F5F",
    light_30: "#EFEEEE",
    light_40: "#DADADA",
    light_50: "#A6A6A6",
    light_60: "#F5F5F5",
    light_70: "#E7E7E7",
    light_80: "#FCFCFC",

    primary: "#D49633",
    primary_1: "#f7ecda",
    primary_2: "#F9EFE1",
    primary_3: "rgba(212, 150, 51, 0.5)",
    primary_4: "rgba(68, 74, 120, 0.1)",
    primary_5: "rgba(212, 150, 51, 0.15)",
    primary_6: "rgba(212, 150, 51, 0.2)",
    primary_7: "#FFFAF4",
    primary_8: "rgba(212, 150, 51, 0.6)",
    primary_9: "rgba(212, 150, 51, 0.25)",

    fadePrimary: "rgba(212, 150, 51, 0.2)",
    red: "#DD1A1A",
    red_1: "#DA0C0C",
    red_2: "rgba(218, 12, 12, 0.1)",
    red_3: "#F16521",
    blue: "#25416B",
    stroke: "#B0B0B0",
    stroke_1: "#EAEAEA",
    stroke_3: "#E2E2E2",
    stroke_4: "#EBE6FB",
    stroke_5: "#E6E6E6",
    info: "#D49633",
    info_1: "rgba(212, 150, 51, 0.1)",
    success: "#0DB180",
    success_1: "rgba(72, 177, 67, 0.1)",
    shadow_1: "#363636",
    shadow_2: "#444444",
    shadow_3: "#929292",
    danger: "#D80027",
};

// const breakpoints = {
//     sm: "430px",
//     md: "1368px",
//     lg: "1920px",

// };

export const theme = extendTheme({
    colors,
    breakpoints: {
        base: "0px",
        sm: "430px",
        md: "768px",
        lg: "1024px",
        xl: "1380px",
        xxl: "1966px",
    },
    components: {
        Radio: {
            variants: {
                custom: {
                    control: {
                        _checked: {
                            bg: "blue.500",
                            borderColor: "blue.500",
                        },
                        _focus: {
                            boxShadow: "Outline",
                        },
                    },
                    label: {
                        color: "gray.700",
                    },
                },
            },
        },
    },
});
