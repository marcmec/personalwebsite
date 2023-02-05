import {
    Box,
    Button,
    Code,
    Container,
    Heading,
    Link,
    List,
    ListItem,
    Text,
    useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import Layout from "../components/layouts/article"
import ProfileImage from "../components/profileimage"

import { ChevronRightIcon } from "@chakra-ui/icons"
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"
import { BioSection, BioYear } from "../components/bio"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
const Page = () => {
    return (
        <Layout>
            <Container>
                <Box display={{ md: "flex" }} mt={6}>
                    <Box flexGrow={1}>
                        <Heading as={"h2"} variant="page-title">
                            Marcos Vinícius
                        </Heading>
                        <Paragraph>
                            Engenheiro de Software | Cientista de Dados | Gamer
                            | Cinéfilo
                        </Paragraph>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <ProfileImage
                            borderWidth="full"
                            width="100px"
                            height="100px"
                            alt="profile image"
                            src="/images/marc.png"
                            status={27}
                        />
                    </Box>
                </Box>
                <Code
                    borderRadius="lg"
                    bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
                    p={3}
                    mb={6}
                    mt={6}
                    align="center"
                >
                    &gt;_ Olá visitante, sou programador, resolvo problemas
                    através da tecnologia.
                </Code>
                <Section delay={0.1}>
                    <Heading as={"h3"} variant="section-title">
                        Descrição
                    </Heading>
                    <Paragraph>
                        Marcos é um Programador com mais de 2 anos de
                        experiência. Engenheiro Mecatrônico e Mestre em
                        Informática. Atua na solução de problemas com
                        tecnologia. Já desenvolveu Jogos 2D com UNITY-3D.
                        Entusiasta de novas tecnologias. Teve a primeira
                        experiência com desenvolvimento de software, quando
                        desenvovleu meu primeiro App Android, para um amigo,
                        chamado
                        <NextLink href="/works">
                            <Link p={2}>Smzinho</Link>
                        </NextLink>
                        &gt;1k downloads playStore, infelizmente descontinuado.
                        Trabalhei na
                        <NextLink href="/works/nextopinion" target={"_blank"}>
                            <Link
                                p={2}
                                href="https://www.nextopinion.com.pt"
                                target="_blank"
                            >
                                Next Opinion
                            </Link>
                        </NextLink>
                        como desenvolvedor FrontEnd, no período entre Dezembro
                        de 2020 e Janeiro de 2023 no qual contribuí no
                        desenvolvimento dos produtos
                        <Link href="https://nexthome.pt/" target={"_blank"}>
                            {" "}
                            NextHome
                        </Link>{" "}
                        &&
                        <Link
                            href="https://www.stepforma.com.br/"
                            target={"_blank"}
                        >
                            {" "}
                            Stepforma
                        </Link>{" "}
                        com, JS,TS e como framework React e React Native, com
                        estilização a partir do antd/ant-design.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works/">
                            <Button
                                rightIcon={[
                                    <ChevronRightIcon />,
                                    <Text>Go!</Text>
                                ]}
                            >
                                Meu portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as={"h3"} variant="section-title">
                        Até aqui
                    </Heading>
                    <BioSection>
                        <BioYear>1995</BioYear>
                        Nascido e criado em Maceió Alagoas, Brasil.
                    </BioSection>

                    <BioSection>
                        <BioYear>2012</BioYear>
                        Primeiro contato com programação no ensino médio,com 17
                        anos, com Lego MINDSTORMS.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Publicação primeiro App
                        <NextLink href="/works/">
                            <Link p={2}>Smzinho</Link>
                        </NextLink>
                        &gt;1k downloads playStore.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Graduado em engenharia Mecatrônica pela UNIT- AL.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>Desenvolvedor FrontEnd na
                        {/* <NextLink href="/works/nextopinion/"> */}
                        <Link
                            p={2}
                            href="https://www.nextopinion.com.pt"
                            target={"_blank"}
                        >
                            Next Opinion
                        </Link>
                        {/* </NextLink> */}
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Mestre em Informática pela Universidade Federal de
                        Alagoas.
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as={"h3"} variant="section-title">
                        Mais um pouco...
                    </Heading>
                    <Paragraph>
                        Amante de pizza e café. Música. Filmes. Academia.
                        Futebol. Machine Learning. Desenho.
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as={"h3"} variant="section-title">
                        Veja mais
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://github.com/marcmec"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @marcmec
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://instagram.com/bento.m.v.s"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoInstagram />}
                                >
                                    @bento.m.v.s
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://twitter.com/marcosdotpkg"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoTwitter />}
                                >
                                    @marcosdotpkg
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
