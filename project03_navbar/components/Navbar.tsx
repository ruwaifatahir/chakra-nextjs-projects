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

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { DropNav } from "./";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <HStack py={6} px={{ base: 5, lg: 10, xl: 20 }} justify="center">
        <Flex w="full" justify="space-between">
          <Image h={10} src="/logo.png" />
          <Hide below="lg">
            <HStack
              spacing={{ base: 5, md: 1, lg: 10, xl: 20 }}
              fontSize="md"
              fontWeight={500}
              // display={{ base: "none", lg: "flex" }}
            >
              <Text as={Link} href="/how">
                How it Works
              </Text>
              <Text as={Link} href="/crypto">
                Crypto
              </Text>
              <Text as={Link} href="/marketplace">
                Marketplace
              </Text>
              <Text as={Link} href="/sign-in">
                Sign In
              </Text>
              <Button
                size="sm"
                width="230px"
                bg="black"
                color="white"
                p="18px"
                _hover={{
                  bg: "transparent",
                  color: "black",
                  border: "2px solid black",
                }}
              >
                Get Started
              </Button>
            </HStack>
          </Hide>

          <Show below="lg">
            <Center>
              <IconButton
                onClick={onToggle}
                aria-label="Hamburger Icon"
                variant="ghost"
                _hover={{
                  bg: "transparent",
                }}
                _focus={{ bg: "transparent" }}
                icon={
                  isOpen ? (
                    <CloseIcon w={4} h={4} />
                  ) : (
                    <HamburgerIcon w={7} h={7} />
                  )
                }
              />
            </Center>
          </Show>
        </Flex>
      </HStack>

      {isOpen ? <DropNav /> : undefined}
    </Box>
  );
};

export default Navbar;
