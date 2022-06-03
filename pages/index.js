import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react"
import ProfileImage from "../components/profileimage"
const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={3}
                mb={6}
                align="center"
            >
                Salve, sou desenvolvedor full-stack, moro no Brasil!
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant="page-title">
                        Marcos Vinícius
                    </Heading>
                    <p>
                        Talker | Engenheiro / Desenvolvedor | Gamer | Cinéfilo
                    </p>
                </Box>{" "}
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            borderWidth="full"
                            width="100%"
                            height="100%"
                            alt="profile image"
                            src="/images/marc.png"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
