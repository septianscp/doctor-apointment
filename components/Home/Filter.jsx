import { Flex, Image, Input } from "native-base";

export default function Filter() {
  return (
    <Flex>
      <Input
        InputLeftElement={
          <Image
            borderRadius="100px"
            alt="search"
            source={require("../../assets/search-normal.png")}
          />
        }
        borderRadius={12}
        backgroundColor="#FAFAFA"
        borderColor="#FAFAFA"
        placeholder="Search doctor or health issue"
      />
    </Flex>
  );
}
