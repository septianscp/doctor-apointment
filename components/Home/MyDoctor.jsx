import { ChevronRightIcon, Flex, Icon, Image, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function MyDoctor() {
  return (
    <Flex
      backgroundColor="#4894FE"
      borderRadius={12}
      p="20px"
      flexDirection="column"
      gap="16px"
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        alignContent="space-between"
      >
        <Flex gap="12px" flexDirection="row" alignItems="center">
          <Image
            borderRadius="100px"
            alt="greeting"
            source={require("../../assets/doctor-img.png")}
          />

          <Flex flexDirection="column" gap="8px">
            <Text fontSize={16} color="white" fontWeight="bold">
              Dr. Imran Syahir
            </Text>
            <Text fontWeight="bold" fontSize={14} color="#CBE1FF">
              General Doctor
            </Text>
          </Flex>
        </Flex>
        <ChevronRightIcon color="white" size="24px" />
      </Flex>
      <Flex
        borderTopColor="#CBE1FF"
        borderTopStyle="solid"
        borderTopWidth={1}
      />
      <Flex flexDirection="row">
        <Flex gap="8px" flexDirection="row" width="50%" alignItems="center">
          <Icon as={Entypo} name="calendar" color="white" size="12px" />
          <Text fontSize={12} color="white">
            Sunday, 12 June
          </Text>
        </Flex>
        <Flex gap="8px" flexDirection="row" width="50%" alignItems="center">
          <Icon as={Entypo} name="clock" color="white" size="12px" />
          <Text fontSize={12} color="white">
            11:00 - 12:00 AM
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
