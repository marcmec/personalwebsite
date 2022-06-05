import { Text, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import { Global } from "@emotion/react"
export const GridItem = ({ children, href, title, thumbnail }) => {
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

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
    return (
        <Box w="100%" align="center">
            <NextLink href={`/works/${id}`}>
                <LinkBox cursor={"pointer"}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        className="grid-item-thumbnail"
                        placeholder="blur"
                    />
                    <LinkOverlay href={`works/${id}`}>
                        <Text mt={2} fontSize={20}>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
)
