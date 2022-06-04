import {
    Container,
    Box,
    Heading,
    useColorModeValue,
    Link,
    Button,
    Text
} from "@chakra-ui/react"
import NextLink from "next/link"
import ProfileImage from "../components/profileimage"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
const Page = () => {
    return (
        <Container>
            <canvas></canvas>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={3}
                mb={6}
                align="center"
            >
                &gt;_ Salve, sou desenvolvedor full-stack, moro no Brasil!
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant="page-title">
                        Marcos Vinícius
                    </Heading>
                    <Paragraph>
                        Engenheiro / Cientista de Dados | Desenvolvedor | Gamer
                        | Cinéfilo
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
                    desenvolvimento de aplicações, quando desenvovli meu
                    primeiro App Android, para um amigo, chamado{" "}
                    <NextLink href="/works/smzinho/">
                        <Link>Smzinho</Link>
                    </NextLink>
                    . Atualmente trabalhando na{" "}
                    <NextLink href="/works/nextopinion/">
                        <Link>Next Opinion</Link>
                    </NextLink>{" "}
                    como desenvolvedor de software, onde contribui com os
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
                    Bio
                </Heading>
                <Paragraph>Bio</Paragraph>
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
