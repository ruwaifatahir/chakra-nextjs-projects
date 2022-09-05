import { NextComponentType } from "next";

import { Box, Flex, HStack, Icon, Text, Divider } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

import { HiLocationMarker, HiShoppingCart, HiUser } from "react-icons/hi";

const Navbar: NextComponentType = () => {
  return (
    <Box
      w="full"
      bg="brand.900"
      p={{ base: 2, sm: 3, md: 4 }}
      px={{ md: "20vh" }}
      color="white"
      fontSize={{ base: "sm", sm: "sm", md: "md" }}
    >
      <Flex
        w="full"
        justify={{ base: "space-between", sm: "center", md: "space-between" }}
        align="center"
        direction={{ base: "column", sm: "row" }}
      >
        <HStack mb={{ base: 2, sm: 0 }} mr={{ base: 0, sm: 3, md: 3  }}>
          <Icon as={EmailIcon} />
          <Text>info@example.com</Text>
        </HStack>

        <HStack justify="center" spacing={2} h={4}>
          <HStack>
            <Icon as={HiLocationMarker} />
            <Text>Branches</Text>
          </HStack>

          <Divider orientation="vertical" />

          <HStack>
            <Icon as={HiShoppingCart} />
            <Text>Stores</Text>
          </HStack>

          <Divider orientation="vertical" />

          <HStack w="full">
            <Icon as={HiUser} />
            <Text width={{ base: "auto", sm: "auto", md: "100px" }}>
              Contact Us
            </Text>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
