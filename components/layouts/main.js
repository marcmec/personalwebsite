import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../navbar"
// import dynamic from "next/dynamic"
// import VoxeRoomLoader from "../vox-room-loader"
import Footer from "../footer"
// const LazyLoopRoom = dynamic(() => import("../load-my-room"), {
//     ssr: false,
//     loading: () => <VoxeRoomLoader />
// })
const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device - width,initial-scale=1"
                />
                <title>Marc Dev - HomePage</title>
            </Head>
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {/* <LazyLoopRoom /> */}
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
