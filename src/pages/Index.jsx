import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, HStack, Link, Icon } from "@chakra-ui/react";
import { FaArrowRight, FaCloudDownloadAlt, FaShareAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Software for SharePoint Document Management!
        </Heading>

        <Image src="https://images.unsplash.com/photo-1554252116-cb46b6d2df78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaGFyZXBvaW50JTIwZG9jdW1lbnRzfGVufDB8fHx8MTcwODU2NzY5M3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Document Management System" />

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Streamline Your Document Workflow
          </Heading>
          <Text fontSize="lg" mb={4}>
            Our software enhances SharePoint by providing a powerful document management system (DMS) that simplifies the organization, storage, security, and access of your digital documents. Designed for efficiency and ease of use, our DMS integrates seamlessly with SharePoint to empower your team's collaboration and productivity.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue">
            Learn More
          </Button>
        </Box>

        <HStack spacing={5}>
          <Button leftIcon={<FaCloudDownloadAlt />} colorScheme="green">
            Download Now
          </Button>
          <Button leftIcon={<FaShareAlt />} colorScheme="purple">
            Share with a friend
          </Button>
        </HStack>

        <Box textAlign="center">
          <Text fontSize="md">Check out more about our features and how we can help your business.</Text>
          <Link href="#" color="teal.500" isExternal>
            Visit our blog <Icon as={FaArrowRight} />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
