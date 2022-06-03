import { Image } from "@chakra-ui/react"
const ProfileImage = ({ src, alt, width, height }) => {
    return <Image src={src} alt={alt} width={width} height={height} />
}

export default ProfileImage
