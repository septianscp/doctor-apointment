import { Flex, Image, Text } from "native-base";

export default function MyProfile() {
  return (
    <Flex flexDirection="row" justifyContent="space-between" width="100%">
      <Flex flexDirection="column">
        <Text fontSize={16} color="#8696BB">
          Hello,
        </Text>
        <Text fontWeight="bold" fontSize={20} color="#0D1B34">
          James Lee
        </Text>
      </Flex>
      <Image
        borderRadius="100px"
        alt="greeting"
        source={require("../../assets/profile-greeting.png")}
      />
    </Flex>
  );
}
