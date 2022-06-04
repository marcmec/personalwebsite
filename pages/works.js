import { Container, Heading, SimpleGrid, Divider, Text } from "@chakra-ui/react"
import Section from "../components/section"
const works = () => {
    return (
        <Container>
            <Divider mt={4} mb={4} />
            <Section delay={0.1}>
                <SimpleGrid></SimpleGrid>
                <Heading>Meus Trabalhos</Heading>
                <Text>ola</Text>
            </Section>
        </Container>
    )
}

export default works
