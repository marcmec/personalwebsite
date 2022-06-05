import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Text,
    Link
} from "@chakra-ui/react"
import NextLink from "next/link"
import Section from "../components/section"
import GridItem from "../components/grid-item"
import { WorkGridItem } from "../components/grid-item"
import smzinhoicon from "../public/images/smzinhoicon.webp"
import pianogo from "../public/images/pianogo.png"
import Layout from "../components/layouts/article"

const works = () => {
    return (
        <Layout>
            <Container>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Trabalhos
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id={"pianogo"}
                            title="pianogo"
                            thumbnail={pianogo}
                        >
                            Aplicativo de música mara a masterclass do professor
                            Waldenberg, disponível em:
                            <NextLink
                                href={"https://github.com/marcmec/Smzinho"}
                            >
                                <Link>PianoGo</Link>
                            </NextLink>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id={"smzinho"}
                            title="Smzinho"
                            thumbnail={smzinhoicon}
                        >
                            Inicialmente o App foi desenvolvido para facilitar a
                            comunicação entre o Streammer Smzinho e seu público,
                            com acesso aos formulários de "salves" dito por ele
                            durante sua gameplay, como também acesso as
                            playlists do youtube, e notificacao dos vídeos mais
                            recentes, utilizando a APIV3 do youtube. Porém, com
                            a migração do Smzinho para a plataforma Twitch, o
                            app foi descontinuado. O código do meu primeiro app
                            encontra-se disponível em:
                            <NextLink
                                href={"https://github.com/marcmec/Smzinho"}
                            >
                                <Link>Código</Link>
                            </NextLink>
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Divider mt={4} mb={4} />
            </Container>
        </Layout>
    )
}

export default works
