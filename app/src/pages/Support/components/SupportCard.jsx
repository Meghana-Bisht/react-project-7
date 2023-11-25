import { Flex, Stack, Icon, Text, Box } from "@chakra-ui/react"

const SupportCard = ({ icon, heading, para, leftComponent }) => {
    return (
        <Flex gap={10} align={{ base: "right", md: "center" }} flexDirection={{
            base: "column",
            xl: "row",
        }}>
            <Stack maxW="360px">
                <Icon boxSize={6} color="p.purple" as={icon} />
                <Text as="h1" fontWeight="bold" textStyle="h1">{heading}</Text>
                <Text fontSize="sm" color="black.60">{para}</Text>
            </Stack >
            <Box maxW="550px" w="full" >{leftComponent}</Box>
        </Flex>
    )
}

export default SupportCard