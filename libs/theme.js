import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            fontFamily: "Spline Sans Mono",
            bg: mode("#f0e7db", "#0b4a51")(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 24,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode("blue", "orange")(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Spline Sans Mono'"
}

const colors = {
    glassTeal: "#88ccca"
}
const config = {
    initalColorMode: "dark",
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme
