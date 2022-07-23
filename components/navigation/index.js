import React from "react";
import { Box, Button, HStack, Text, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

function Navigation() {
  return (
    <Box width="80%" mx="auto">
      <HStack>
        <NextLink href="/">
          <Link>
            <Text fontSize="lg" color="red.500">
              Home
            </Text>
          </Link>
        </NextLink>
        <Flex>
          <NextLink href="/register">
            <Button variant="ghost" my={5} w="100%">
              Register
            </Button>
          </NextLink>
          <NextLink href="/login">
            <Button variant="ghost" my={5} w="100%">
              Login
            </Button>
          </NextLink>
        </Flex>
        <Text>Setting</Text>
      </HStack>
    </Box>
  );
}

export default Navigation;
