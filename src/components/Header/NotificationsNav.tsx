import { Flex, HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

const NotificationsNav: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      ml="auto"
    >
      <HStack
        spacing="4"
        mx="8"
        pr="8"
        py="1"
        color="gray.500"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
    </Flex>
  );
}

export default NotificationsNav;