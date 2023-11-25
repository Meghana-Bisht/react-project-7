import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
} from '@chakra-ui/react'
import SideNav from './SideNav'

const SideDrawer = ({ onClose, isOpen }) => {

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <SideNav />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )

}

export default SideDrawer