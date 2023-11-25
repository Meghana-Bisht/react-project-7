import { Card, Flex, Button, Icon, Tabs, TabList, Tab, TabPanels, TabPanel, Tag, InputGroup, InputLeftElement, Input, HStack } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { HiDownload } from "react-icons/hi";
import TransactionTable from "./components/TransactionTable";
import { MdOutlineSearch } from "react-icons/md";
import TransactionCard from "./components/TransactionCard";
const Transaction = () => {

    const tabs = [
        {
            name: "All",
            count: 349,
        },
        {
            name: "Deposit",
            count: 114,
        },
        {
            name: "Withdraw",
            count: 213,
        },
        {
            name: "Trade",
            count: 22,
        },
    ]
    return (
        <DashboardLayout title="Transactions">
            <Flex justify="end" mt={3} mb={3}>
                <Button leftIcon={<Icon as={HiDownload} />}>Export CSV</Button>
            </Flex>
            <Card borderRadius="16px">
                <Tabs>
                    <TabList pt={4} display="flex" flexDirection={{
                        base: "column",
                        xl: "row",
                    }} justifyContent="space-between" alignItems="center" >
                        <HStack>
                            {
                                tabs.map((tab) => (
                                    <Tab key={tab.name} display="flex" flexDirection={{base:"column",xl:"row"}} gap="2" pb={4} fontWeight={"bold"}>
                                        {tab.name}<Tag colorScheme="gray" fontWeight={"bold"} borderRadius="full">{tab.count}</Tag>
                                    </Tab>
                                ))
                            }
                        </HStack>
                        <InputGroup maxW="300px" pr={6}  pb={{base:2}}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon fontSize="25px" as={MdOutlineSearch} color='gray' />
                            </InputLeftElement>
                            <Input type='text' placeholder='Search by ID or Destination' />
                        </InputGroup>

                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </DashboardLayout>
    )
}

export default Transaction