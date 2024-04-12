import { Flex, Image, Text } from "native-base";

export default function Menus() {
  return (
    <Flex flexDirection="row" gap="16px" flexWrap="wrap">
      <Flex gap="8px" flexDirection="column" alignItems="center">
        <Flex
          width="72px"
          height="72px"
          backgroundColor="#FAFAFA"
          borderRadius="100px"
          alignItems="center"
          justifyContent="center"
        >
          <Image source={require("../../assets/sun.png")} alt="covid" />
        </Flex>
        <Text color="#8696BB" fontSize="15px">
          Covid 19
        </Text>
      </Flex>
      <Flex gap="8px" flexDirection="column" alignItems="center">
        <Flex
          width="72px"
          height="72px"
          backgroundColor="#FAFAFA"
          borderRadius="100px"
          alignItems="center"
          justifyContent="center"
        >
          <Image source={require("../../assets/profile-add.png")} alt="covid" />
        </Flex>
        <Text color="#8696BB" fontSize="15px">
          Doctor
        </Text>
      </Flex>
      <Flex gap="8px" flexDirection="column" alignItems="center">
        <Flex
          width="72px"
          height="72px"
          backgroundColor="#FAFAFA"
          borderRadius="100px"
          alignItems="center"
          justifyContent="center"
        >
          <Image source={require("../../assets/link.png")} alt="covid" />
        </Flex>
        <Text color="#8696BB" fontSize="15px">
          Medicine
        </Text>
      </Flex>
      <Flex gap="8px" flexDirection="column" alignItems="center">
        <Flex
          width="72px"
          height="72px"
          backgroundColor="#FAFAFA"
          borderRadius="100px"
          alignItems="center"
          justifyContent="center"
        >
          <Image source={require("../../assets/hospital.png")} alt="covid" />
        </Flex>
        <Text color="#8696BB" fontSize="15px">
          Hospital
        </Text>
      </Flex>
    </Flex>
  );
}
