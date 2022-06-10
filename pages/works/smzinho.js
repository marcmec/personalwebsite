import { Box, Container, Heading, Image, Text } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"

const smzinho = () => {
    return (
        <Layout>
            <Container align="center" m={6}>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Smzinho
                </Heading>
                <Box>
                    <Image borderRadius={4} src="../images/smzinhoicon.webp" />
                </Box>
            </Container>
        </Layout>
    )
}
export default smzinho
