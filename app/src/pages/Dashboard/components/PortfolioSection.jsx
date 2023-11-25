import { HStack, Stack, Icon, Text, Button, Tag } from "@chakra-ui/react"
import { BsInfoCircleFill } from "react-icons/bs"
import { HiDownload, HiUpload } from "react-icons/hi";

const PortfolioSection = () => {
    return (
        <HStack justifyContent="space-between" bg="white" borderRadius="xl" p="6" align={{
            base: "flex-start",
            xl: "center",

        }} flexDirection={{
            base: "column",
            md: "column",
            xl: "row",
        }}
            spacing={{
                base: 4,
                xl: 0,
            }}
        >
            <HStack spacing={{
                base: 0,
                xl: 16,
            }}
                align={{
                    base: "flex-start",
                    xl: "center",

                }} flexDirection={{
                    base: "column",
                    md: "column",
                    xl: "row",
                }}>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" fontWeight="bold" >Total Portfolio Value</Text>
                        <Icon
                            as={BsInfoCircleFill}
                        />
                    </HStack>
                    <Text textStyle="h2" fontWeight="bold">₹ 112,312.24</Text>
                </Stack>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" fontWeight="bold" >Wallet Balances</Text>
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
                        <HStack>
                            <Text textStyle="h2" fontWeight="bold" >22.39401000</Text><Tag borderRadius="100px" fontSize="12px" fontWeight="bold" color="black.60" bg="black.5">BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="bold" >₹ 1,300.00</Text><Tag borderRadius="100px" fontSize="12px" fontWeight="bold" color="black.60" bg="black.5">INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>
            <HStack >
                <Button bg="purple.500" color="white" borderRadius="10px" gap="8px">
                    <Icon
                        as={HiDownload}
                    />
                    Deposit</Button>
                <Button bg="purple.500" color="white" borderRadius="10px" gap="8px">
                    <Icon
                        as={HiUpload}
                    />
                    Withdraw</Button>
            </HStack>
        </HStack>
    )
}

export default PortfolioSection