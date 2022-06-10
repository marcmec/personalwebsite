import Link from "next/link"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 28px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(180deg);
    }
`

const logo = () => {
    return (
        <Link href={"/"}>
            <a>
                <LogoBox>
                    <Text
                        color={useColorModeValue("gray.800", "whiteAlpha.900")}
                        fontFamily="'Spline Sans Mono'"
                        fontWeight="bold"
                        ml={10}
                    >
                        Marc Dev
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
export default logo
