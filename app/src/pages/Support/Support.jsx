import DashboardLayout from "../../components/DashboardLayout"
import { IoMdMail } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import SupportCard from "./components/SupportCard"
import ContactCard from "./components/ContactCard"
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing={6}>
        <SupportCard
          leftComponent={<ContactCard></ContactCard>}
          icon={IoMdMail}
          heading="Contact Us"
          para="Have a question or just want to know more? Feel free to reach out to us."
        ></SupportCard>
        <SupportCard
          leftComponent={<InfoCard imgUrl="/Visual.svg"
            text="Chat with us now"
            inverted={true}
            ButtonText="Chatbot"></InfoCard>}
          icon={IoChatbubble}
          heading="Live Chat"
          para="Don’t have time to wait for the answer? Chat with us now."
        ></SupportCard>
      </Stack>
    </DashboardLayout>
  )
}

export default Support