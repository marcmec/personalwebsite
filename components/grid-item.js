import { Text, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import { Global } from "@emotion/react"
const GridItem = ({ children, href, title, thumbnail }) => {
    return (
        <Box>
            <LinkBox>
                <Image
                    src={thumbnail}
                    alt={title}
                    className={"grid-item-thumbnail"}
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    )
}

export default GridItem

export const WorkGridItem = ({ children, id, title }) => {}
