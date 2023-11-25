import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Icon,
    Stack,
    Text,
    Tag
} from '@chakra-ui/react';
import { IoMdArrowDropdown } from "react-icons/io"

const TransactionTable = () => {

    const tableData = [
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
    ];

    const statusColor ={
        Pending:"#797e82",
        Processing:"#F5A50B",
        Completed:"#059669",
        Cancelled:"#DC2626",

    }



    return (
        <TableContainer>
            <Table variant='simple' colorScheme='gray'>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time<Icon as={IoMdArrowDropdown} /> </Th>
                        <Th>Type</Th>
                        <Th>Amount<Icon as={IoMdArrowDropdown} /></Th>
                        <Th >Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        tableData.map((data) => (
                            <Tr key={data.id}>
                                <Td fontSize="sm" fontWeight="bold">{data.id}</Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontSize="sm" fontWeight="bold">{data.date}</Text>
                                        <Text fontSize="xs" fontWeight="medium" color='gray'>{data.time}</Text>
                                    </Stack>
                                </Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontSize="sm" fontWeight="bold">{data.type.name}</Text>
                                        <Text fontSize="xs" fontWeight="medium" color='gray'>{data.type?.tag}</Text>
                                    </Stack>
                                </Td>
                                <Td fontSize="sm" fontWeight="bold">{data.amount}</Td>
                                <Td fontSize="sm" fontWeight="bold"><Tag color="white" fontWeight="bold" borderRadius="full" bg={statusColor[data.status]}>{data.status}</Tag></Td>

                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TransactionTable