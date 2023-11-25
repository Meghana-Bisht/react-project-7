import { Card, Stack, HStack, FormControl, FormLabel, Input, Textarea, Checkbox, Button, Box,Text } from '@chakra-ui/react'

const ContactCard = () => {
    return (
        <Card p={"6"} borderRadius={"16px"}>
            <Stack spacing={4}>
                <Text fontWeight="bold" fontSize="sm">
                    You will receive response within 24 hours of time of submit.
                </Text>
                <HStack flexDirection={{
                    base: "column",
                    md: "row",
                }} spacing={{ base: "6" }}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' placeholder="James" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Surname</FormLabel>
                        <Input type='text' placeholder="Aruther" />
                    </FormControl>
                </HStack>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder="name@gmail.com" />
                <FormLabel>Message</FormLabel>
                <Textarea type='email' placeholder="Your Message" />
                <Checkbox ><Text fontSize="xs" fontWeight="semibold">
                    I agree with <Box as="span" color="p.purple">Terms & Conditions.</Box>
                </Text></Checkbox>
                <Stack>
                    <Button fontSize='sm' color="#797E82" bg='#D8DDE2'>Send a Message</Button>
                    <Button fontSize='sm' colorScheme='gray' mt={2}>Book a Meeting</Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ContactCard