import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 48px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transfrom: rotate(45deg);
    }
    &:hover h1 {
        color: "red";
    }
`

const logo = () => {
    const rocketPrint = `/images/rocket${useColorModeValue("", "-dark")}.png`

    return (
        <Link href={"/"}>
            <a>
                <LogoBox>
                    <Image
                        src={rocketPrint}
                        width={25}
                        height={20}
                        alt={"logo"}
                    />
                    <Text
                        color={useColorModeValue("gray.800", "whiteAlpha.900")}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Marcos Vinícius
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
export default logo
