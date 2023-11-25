import { Button, Card, Heading, Stack } from "@chakra-ui/react";
import { CardBody, CardFooter } from '@chakra-ui/react'

const TransactionCard = () => {

    const cardData = [
        {
            id: "HD82NA2H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer",
            },
            amount: "+ ₹81,123",
            status: "Pending",
        },
        {
            id: "HD82NA4H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "INR Widthdraw",
                tag: "Wire Transfer",
            },
            amount: "- ₹55,123",
            status: "Processing",
        },
        {
            id: "HD82NA5H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Buy",
            },
            amount: "12.0554484 BTC",
            status: "Cancelled",
        },
        {
            id: "HD82NA6H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Sell",
            },
            amount: "- 2.0554484 BTC",
            status: "Completed",
        },
        {
            id: "HD82NA7H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "BTC Deposit",
            },
            amount: "+ 15.5000000",
            status: "Pending",
        },
        {
            id: "HD82NA8H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "BTC Widthdraw",
            },
            amount: "- 5.05555544",
            status: "Completed",
        },
    ]
    const statusColor = {
        Pending: "#797e82",
        Processing: "#F5A50B",
        Completed: "#059669",
        Cancelled: "#DC2626",

    }
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Stack>
                    
                </Stack>
                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

export default TransactionCard;