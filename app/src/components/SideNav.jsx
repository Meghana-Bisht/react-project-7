import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const SideNav = () => {

    const location = useLocation();
    console.log(location);

    const isActiveLink = (link) => {
        return location.pathname === link;
    }

    const navLinks = [{
        icon: RxDashboard,
        text: "Dashboard",
        link: "/"
    },
    {
        icon: TbArrowsDoubleNeSw,
        text: "Transactions",
        link: "/transaction"

    }]
    // .stack{
    //     display:flex;
    //     flex-direction:column;
    // }
    // .hstack{
    //     display:flex;
    //     align-items:center;
    // }

    return (
        <Stack boxShadow={{
            base: "none",
            lg: "lg",
        }} w={{
            base: "full",
            lg: "256px",
        }} h="100vh" justifyContent="space-between"
            bg="white"
        >
            <Box>
                <Heading fontSize="20px" color="#5F00D9" padding="54px 46px 24px 28px " as="h1">@MeghanaBisht</Heading>
                <Box mt="6" mx="3">
                    {navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.text}>
                            <HStack bg={isActiveLink(nav.link) ? "#F3F3F7" : "#transparent"} color={isActiveLink(nav.link) ? "#171717" : "#797E82"} borderRadius={"10px"} padding="0px 12px" cursor="pointer" transition="0.5s ease" _hover={
                                {
                                    bg: "#F3F3F7",
                                    borderRadius: "10px",
                                    color: "#171717"
                                }
                            }
                                textColor="#797E82">
                                <Icon as={nav.icon} />
                                <Text fontSize="14px" padding="12px 6px" fontWeight="extrabold">{nav.text}</Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Box mt="6" mx="3" mb="6">
                <Link to="/support">
                    <HStack padding="0px 12px" cursor="pointer" transition="0.5s ease" bg={isActiveLink("/support") ? "#F3F3F7" : "#transparent"} color={isActiveLink("/support") ? "#171717" : "#797e82"} _hover={
                        {
                            bg: "#F3F3F7",
                            borderRadius: "10px",
                            color: "#171717"
                        }
                    }
                        textColor="#797e82">
                        <Icon as={BiSupport} />
                        <Text fontSize="14px" padding="12px 6px" fontWeight="extrabold">Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    )
}

export default SideNav