import { Box, HStack, Heading, Icon } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopNav = ({ title, onOpen }) => {
    return (
        <Box px="4" bg="white">
            <HStack maxW="60rem" mx="auto" h="64px" justifyContent="space-between">
                <Icon as={FaBars} onClick={onOpen} display={{
                    base: "block",
                    lg: "none"
                }} />
                <Heading fontWeight="bold" fontSize="28px">{title}</Heading>
                <Menu>
                    <MenuButton>
                        <Icon as={FaUserCircle} fontSize="2.5rem" />
                    </MenuButton>
                    <MenuList>
                        <Link to={"/"} key={'Dashboard'}>
                            <MenuItem>Dashboard</MenuItem>
                        </Link>
                        <Link to={"/transaction"} key={'Transactions'}>
                            <MenuItem>Transactions</MenuItem>
                        </Link>
                        <MenuItem>Contact Us</MenuItem>
                        <Link to={"/support"}>
                            <MenuItem>Support</MenuItem>
                        </Link>
                        <MenuItem>Log Out</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default TopNav