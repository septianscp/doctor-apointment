import { Flex, Text } from "native-base";

export default function NearDoctor() {
  return (
    <Flex gap="16px">
      <Text color="#0D1B34" fontSize="16px" fontWeight="medium">
        Near Doctor
      </Text>
      <Flex flexDirection="row"></Flex>
    </Flex>
  );
}
