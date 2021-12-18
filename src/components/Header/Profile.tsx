import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Profile: React.FC = () => {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Rafael</Text>
        <Text color="gray.300" fontSize="sm">rafael@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Rafa Goulart" />
    </Flex>
  );
}

export default Profile;