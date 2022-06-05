import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../navbar"
import dynamic from "next/dynamic"
import VoxeRoomLoader from "../vox-room-loader"
const LazyLoopRoom = dynamic(() => import("../load-room"), {
    ssr: false,
    loading: () => <VoxeRoomLoader />
})
const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device - width,initial-scale=1"
                />
                <title>Marcos Vinícius - HomePage</title>
            </Head>
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyLoopRoom />
                {children}
            </Container>
        </Box>
    )
}

export default Main
