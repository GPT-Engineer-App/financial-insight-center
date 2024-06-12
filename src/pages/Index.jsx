import { Container, Box, Heading, Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" borderBottom="1px" borderColor="gray.200" mb={4} pb={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={2}>
          Financial Times
        </Heading>
        <Text textAlign="center" color="gray.500">
          The latest financial news and analysis
        </Text>
      </Box>

      <VStack spacing={8} align="stretch">
        <Box as="section">
          <Heading as="h2" size="lg" mb={4}>
            Top Stories
          </Heading>
          <HStack spacing={4}>
            <Box w="50%">
              <Image src="/images/top-story-1.jpg" alt="Top story 1" mb={2} />
              <Heading as="h3" size="md" mb={2}>
                Market hits record high
              </Heading>
              <Text>
                The stock market reached a new record high today, driven by strong earnings reports and economic optimism.
              </Text>
            </Box>
            <Box w="50%">
              <Image src="/images/top-story-2.jpg" alt="Top story 2" mb={2} />
              <Heading as="h3" size="md" mb={2}>
                Tech companies lead the way
              </Heading>
              <Text>
                Technology companies are leading the market rally, with several major firms reporting better-than-expected results.
              </Text>
            </Box>
          </HStack>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg" mb={4}>
            Latest Articles
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Economic growth accelerates
              </Heading>
              <Text>
                The economy is growing at its fastest pace in years, with GDP increasing by 4% in the last quarter.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Inflation concerns rise
              </Heading>
              <Text>
                Inflation is becoming a growing concern for policymakers, with prices rising at their fastest rate in over a decade.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Unemployment rate drops
              </Heading>
              <Text>
                The unemployment rate has dropped to its lowest level in years, as businesses ramp up hiring.
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>

      <Box as="footer" borderTop="1px" borderColor="gray.200" mt={8} pt={4}>
        <HStack justify="center" spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </HStack>
        <Text textAlign="center" color="gray.500" mt={2}>
          &copy; 2023 Financial Times. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;