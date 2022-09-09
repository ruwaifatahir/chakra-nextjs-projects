import {
  Box,
  Flex,
  HStack,
  VStack,
  Center,
  Text,
  Image,
  IconButton,
  Button,
  Hide,
  Show,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";

import Link from "next/link";

const DropNav = () => {
  return (
    <Show below="lg">
      {/* <Divider /> */}
      <VStack
        // bg="gray.400"
        height={{base:"50%", md:"32%"}}
        width="full"
        boxShadow="dark-lg"
        align="start"
        fontSize="md"
        px={5}
        py={8}
        spacing={8}
      >
        <Text as={Link} href="/about">
          About
        </Text>

        <VStack pl={2} align="start" spacing={5} fontWeight={500}>
          <Text as={Link} href="/how">
            How it Works
          </Text>
          <Text as={Link} href="/crypto">
            Crypto
          </Text>
        </VStack>

        <Text>Explore Marketplace</Text>

        <Box pl={2} fontWeight={500}>
          <Text as={Link} href="/marketplace">
            Marketplace
          </Text>
        </Box>

        <HStack spacing={{base:7, md: 40}} justify="flex-end" w="full">
          <Button variant="ghost">Sign In</Button>
          {/* <Button variant="solid" color="white" bg="black" size ="lg" >Get Started</Button> */}
          <Button size="sm" width={{base:"180px",md:"380px"}} bg="black" color="white" p="18px  ">
            Get Started
          </Button>
        </HStack>
      </VStack>
    </Show>
  );
};

export default DropNav;
