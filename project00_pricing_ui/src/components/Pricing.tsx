import { NextComponentType } from "next";
import {
  Flex,
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  Button,
  Icon,
  StackProps,
} from "@chakra-ui/react";

import { CheckIcon } from "../icons/CheckIcon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text fontWeight={400} fontSize="18px">
        {children}
      </Text>
    </HStack>
  );
};
const Pricing: NextComponentType = () => {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-160px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      textAlign="center"
    >
      <Flex>
        <Box
          bg="#F0EAFB"
          textAlign="center"
          width="378px"
          pt="60px"
          pb="74px"
          px="48px"
          // overflow="hidden"
        >
          <Heading fontWeight={800} fontSize="24px" color="#171923">
            Premium PRO
          </Heading>
          <Heading fontWeight={800} fontSize="60px" color="#171923" pt="16px">
            $329
          </Heading>
          <Text fontWeight={500} fontSize="18px" color="#171923">
            billed just once
          </Text>
          <Button
            bg="#805AD5"
            size="lg"
            w="282px"
            mt="24px"
            borderRadius="8px"
            fontWeight={700}
            fontSize="16px"
            color="#F7FAFC"
          >
            Get Started
          </Button>
        </Box>

        <Box bg="white" py="48px" px="42px">
          <Text fontWeight={400} fontSize="18px" textAlign="left">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>International calling and messaging API</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
