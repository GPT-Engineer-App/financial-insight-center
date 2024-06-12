import { Box, Container, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="2xl">Financial Times</Heading>
        <Flex>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <FaLinkedin size="24px" />
          </Link>
        </Flex>
      </Flex>
      <Flex>
        <Box flex="3" pr={4}>
          <Image src="https://via.placeholder.com/800x400" alt="Main article" mb={4} />
          <Heading as="h2" size="lg" mb={2}>Main Article Title</Heading>
          <Text fontSize="md" mb={4}>This is a summary of the main article. It provides a brief overview of the content to entice readers to click and read more.</Text>
          <Link color="teal.500" href="#">Read more</Link>
        </Box>
        <Box flex="1" pl={4}>
          <Heading as="h3" size="md" mb={2}>Side Articles</Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h4" size="sm">Side Article 1</Heading>
              <Text fontSize="sm">Summary of side article 1.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box>
              <Heading as="h4" size="sm">Side Article 2</Heading>
              <Text fontSize="sm">Summary of side article 2.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box>
              <Heading as="h4" size="sm">Side Article 3</Heading>
              <Text fontSize="sm">Summary of side article 3.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;