import { NextComponentType } from "next";

import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Header: NextComponentType = () => {
  return (
    <VStack
      as="section"
      // textAlign="center"
      color="#F7FAFC"
      bg="#6B46C1"
      pt="90px"
      pb="198px"
      px="32px"
      // pr="32px"
    >
      <Heading fontWeight={800} fontSize="48px">
        Simple pricing for your business
      </Heading>
      <Text fontWeight={500} fontSize="24px" opacity="0.84" pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </VStack>
  );
};

export default Header;
