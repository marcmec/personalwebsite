import { Container, Heading, SimpleGrid, Divider, Text } from "@chakra-ui/react"
import Section from "../components/section"
const works = () => {
    return (
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Meus Trabalhos
            </Heading>

            <Divider mt={4} mb={4} />
            <Section delay={0.1}>
                <SimpleGrid></SimpleGrid>
                <Text>ola</Text>
            </Section>
        </Container>
    )
}

export default works
