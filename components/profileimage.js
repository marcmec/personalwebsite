import { Avatar, AvatarBadge, Stack } from "@chakra-ui/react"
const ProfileImage = ({ src, alt, width, height, status }) => {
    return (
        <Stack direction="row" spacing={4}>
            <Avatar
                name={"marcos vinícius"}
                src={src}
                alt={alt}
                width={width}
                height={height}
            >
                <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="2em">
                    {status}
                </AvatarBadge>
            </Avatar>
        </Stack>
    )
}

export default ProfileImage
