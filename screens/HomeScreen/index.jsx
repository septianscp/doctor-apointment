import {
  Avatar,
  Box,
  ChevronRightIcon,
  Flex,
  Icon,
  Image,
  Input,
  NativeBaseProvider,
  StatusBar,
  Text,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import MyProfile from "../../components/Home/MyProfile";
import MyDoctor from "../../components/Home/MyDoctor";
import Filter from "../../components/Home/Filter";
import Menus from "../../components/Home/Menus";
import NearDoctor from "../../components/Home/NearDoctor";

export default function HomeScreen() {
  return (
    <Flex
      p="20px 24px 0 24px"
      flexDirection="column"
      gap="32px"
      backgroundColor="white"
      height="100vh"
    >
      <StatusBar />
      <MyProfile />
      <MyDoctor />
      <Filter />
      <Menus />
      <NearDoctor />
    </Flex>
  );
}
