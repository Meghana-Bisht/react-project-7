import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard';
import { Box, Stack, Text, Flex, Icon, Grid, Divider, Button } from '@chakra-ui/react';
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBtc } from 'react-icons/fa';

const Transactions = () => {

    const transactions = [{
        id: "1",
        icon: BsCurrencyRupee,
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2022-06-09 7:06 PM",
    },
    {
        id: "2",
        icon: FaBtc,
        text: "BTC Sell",
        amount: "- 12.48513391 BTC",
        timestamp: "2022-05-27 12:32 PM",
    },
    {
        id: "3",
        icon: BsCurrencyRupee,
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2022-06-09 7:06 PM",
    },
    ]

    return (
        <CustomCard h="full">
            <Text mb={6} fontSize="sm" fontWeight="bold" color="black.80" >Recent Transactions</Text>
            <Stack spacing={4}>
                {transactions.map((transaction, i) => (
                    <Fragment key={transaction.id}>
                        {i !== 0 && <Divider mt="2" />}
                        <Flex gap={4} w="full" >
                            <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                                <Icon as={transaction.icon} />
                            </Grid>
                            <Flex justify="space-between" w="full">
                                <Stack spacing={0}>
                                    <Text textStyle="h6">{transaction.text}</Text>
                                    <Text fontSize="sm" color="black.40">{transaction.timestamp}</Text>
                                </Stack>
                                <Text fontWeight="bold" textStyle="h6">{transaction.amount}</Text>
                            </Flex>
                        </Flex>
                    </Fragment>
                ))}
            </Stack>
            <Button w="full" colorScheme='gray' mt={10}>View All</Button>
        </CustomCard>
        
    )
}

export default Transactions