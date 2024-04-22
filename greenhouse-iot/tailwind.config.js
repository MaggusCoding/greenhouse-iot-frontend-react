/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
    plugins: [
        nextui({
            themes: {
                "green-dark": {
                    extend: "dark",  // Inherits default values from the dark theme
                    colors: {
                        background: "#081c15", // A darker green for the background
                        foreground: "#ffffff", // Ensuring text and other elements are light for contrast
                        primary: {
                            50: "#e6f4ea",
                            100: "#cce9d6",
                            200: "#99d3ad",
                            300: "#66bd84",
                            400: "#33a75a",
                            500: "#12A150", // Your main green color
                            600: "#0d8140",
                            700: "#096130",
                            800: "#064120",
                            900: "#032110",
                            DEFAULT: "#12A150",
                            foreground: "#ffffff",
                        },
                        light: "#99d3ad",
                        focus: "#0d8140",  // A focus state color that's slightly darker
                    },
                    layout: {
                        disabledOpacity: "0.5",
                        radius: {
                            small: "4px",
                            medium: "6px",
                            large: "8px",
                        },
                        borderWidth: {
                            small: "1px",
                            medium: "2px",
                            large: "3px",
                        },
                    },
                },
            },
        }),
    ],
}

