import { TabPanel, TabPanels } from "@chakra-ui/tabs";
import { VStack, Text } from "@chakra-ui/layout";
import { useContext } from "react";
import { FriendContext } from "./Home";

const Chat = () => {
  const { friendList } = useContext(FriendContext);
  return friendList.length > 0 ? (
    <VStack>
      <TabPanels>
        <TabPanel>friend one</TabPanel>
        <TabPanel>friend two</TabPanel>
        <TabPanel>friend three</TabPanel>
      </TabPanels>
    </VStack>
  ) : (
    <VStack
      justify="center"
      pt="5rem"
      w="100%"
      textAlign="center"
      fontSize={"lg"}
    >
      <TabPanels>
        <TabPanel>
          <Text>No frens ? :( Click add friend to start chatting</Text>
        </TabPanel>
      </TabPanels>
    </VStack>
  );
};

export default Chat;
