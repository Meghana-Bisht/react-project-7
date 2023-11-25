import { HStack, Stack, Text, Button, Icon, Flex, Image, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import { CustomCard } from '../../../chakra/CustomCard'
import { MdArrowOutward } from "react-icons/md";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const PriceSection = () => {

    const timestamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55PM"]

    return (
        <CustomCard>
            <Flex justify='space-between' align="start" >
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" fontWeight="bold" >Current Price</Text>
                    </HStack>
                    <HStack spacing={{
                        base: 2,
                        xl: 8,
                    }}
                        align={{
                            base: "flex-start",
                            sm: "center",

                        }} flexDirection={{
                            base: "column",
                            sm: "row",
                        }}
                    >
                        <HStack pr="8px">
                            <Text textStyle="h2" fontWeight="bold" >₹26,670.25</Text>
                            <HStack color="#059669"
                                fontWeight="extrabold">
                                <Icon
                                    as={MdArrowOutward}
                                />
                                <Text fontSize="sm" >0.04%</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack >
                    <Button bg="purple.500" color="white" borderRadius="10px" gap="8px">
                        <Icon
                            as={FaCirclePlus}
                        />
                        Buy</Button>
                    <Button bg="purple.500" color="white" borderRadius="10px" gap="8px">
                        <Icon
                            as={FaCircleMinus}
                        />
                        Sell</Button>
                </HStack>
            </Flex>
            <Tabs variant='soft-rounded'>
                <Flex justify="end" >
                    <TabList bg="black.5" p="8px" >
                        {
                            ["1H", "1D", "1W", "1M"].map((tab) => (
                                <Tab _selected={{
                                    bg: "white",
                                }} key={tab} fontSize="sm" p="8px" borderRadius="4">{tab}</Tab>
                            ))
                        }
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image
                            w="100%"
                            src='/Graph.svg'
                            mt="48px"
                        ></Image>
                        <HStack justify="space-between">
                            {
                                timestamps.map((timestamp) => (
                                    <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </CustomCard>
    )
}

export default PriceSection