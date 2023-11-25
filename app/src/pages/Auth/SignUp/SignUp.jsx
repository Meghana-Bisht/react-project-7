import { Card, Container,Center,Text } from "@chakra-ui/react"


const SignUp = () => {
    return (
        <Container>
            <Center minH="100vh">
            <Card p="6" borderRadius="1rem" maxW="408px">
                <Text textStyle="h1">Welcome to Crypto App</Text>
            </Card>
            </Center>
        </Container>
    )
}

export default SignUp