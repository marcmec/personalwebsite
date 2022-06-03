import theme from "../libs/theme"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
export default function ThemeToggle() {
    const { toggleColorMode } = useColorMode()
    return (
        <header>
            <IconButton
                onClick={toggleColorMode}
                colorScheme={useColorModeValue("green", "orange")}
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            ></IconButton>
        </header>
    )
}
