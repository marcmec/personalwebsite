import { Container, Box, Heading } from "@chakra-ui/react"
const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg="#006400"
                p={3}
                align="center"
                color="white"
            >
                Salve, sou desenvolvedor full-stack, moro no Brasil!
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1} as="h2" variant="page-title">
                    <Heading>Marcos Vinícius</Heading>
                    <p>Talker | Engenheiro / Desenvolvedor </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
