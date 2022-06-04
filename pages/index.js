import {
    Container,
    Box,
    Heading,
    useColorModeValue,
    Link,
    Button,
    Text,
    Code
} from "@chakra-ui/react"
import NextLink from "next/link"
import ProfileImage from "../components/profileimage"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioYear, BioSection } from "../components/bio"
const Page = () => {
    return (
        <Container>
            <canvas></canvas>

            <Code
                borderRadius="lg"
                bg={useColorModeValue("blackAlpha.500", "whiteAlpha.200")}
                p={3}
                mb={6}
                align="center"
            >
                &gt;_ Salve, sou desenvolvedor full-stack, resolvo problemas
                através da tecnologia.
            </Code>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant="page-title">
                        Marcos Vinícius
                    </Heading>
                    <Paragraph>
                        Engenheiro de Software | Gamer | Cinéfilo
                    </Paragraph>
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
            <Section delay={0.1}>
                <Heading as={"h3"} variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Marcos é um Desenvolvedor FullSatack com mais de 1 ano de
                    experiência. Engenheiro Mecatrônico e Mestrando PPGI-UFAL
                    -Informática. Atuo na solução de problemas com tecnologia.
                    Já desenvolvi Jogos 2D com UNITY-3D. Entusiasta de novas
                    tecnologias. Tive minha primeira experiência com
                    desenvolvimento de aplicações, quando desenvolvi meu
                    primeiro App Android, para um amigo, chamado{" "}
                    <NextLink href="/works/smzinho/">
                        <Link>Smzinho</Link>
                    </NextLink>{" "}
                    &gt;1k downloads playStore, infelizmente descontinuado.
                    Atualmente trabalhando na{" "}
                    <NextLink href="/works/nextopinion/">
                        <Link>Next Opinion</Link>
                    </NextLink>{" "}
                    como desenvolvedor de software, onde contribuo com os
                    produtos {"{"}
                    <NextLink href="/works/nextopinion/apps/nexthome">
                        <Link> NextHome</Link>
                    </NextLink>{" "}
                    &&
                    <NextLink href="/works/nextopinion/apps/stepforma">
                        <Link> Stepforma</Link>
                    </NextLink>{" "}
                    {"}"}
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works/">
                        <Button
                            rightIcon={[<ChevronRightIcon />, <Text>Go!</Text>]}
                        >
                            Meu portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as={"h3"} variant="section-title">
                    My Way
                </Heading>
                <BioSection>
                    <BioYear>1995</BioYear>
                    Nascido e criado em Alagoas, Brasil.
                </BioSection>

                <BioSection>
                    <BioYear>2012</BioYear>
                    Primeiro contato com programação no ensino médio,com 17
                    anos, com Lego MINDSTORMS.
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Publiquei meu primeiro App{" "}
                    <NextLink href="/works/smzinho/">
                        <Link>Smzinho</Link>
                    </NextLink>{" "}
                    &gt;1k downloads playStore.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Graduado em engenharia Mecatrônica pela UNIT- AL.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear> até o momento. Desenvolvedor
                    FullSatack na{" "}
                    <NextLink href="/works/nextopinion/">
                        <Link>Next Opinion</Link>
                    </NextLink>
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Terminando o Mestrado em Informática pela Universidade
                    Federal de Alagoas.
                </BioSection>
                <BioSection>Continua...</BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as={"h3"} variant="section-title">
                    know me
                </Heading>
                <Paragraph>
                    Amante de pizza e café. Academia. Uma boa conversa. Filmes.
                    Entusiasta de novas tecnologias.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Heading as={"h3"} variant="section-title">
                    Sociais
                </Heading>
                <Paragraph>Sociais</Paragraph>
            </Section>
        </Container>
    )
}

export default Page
