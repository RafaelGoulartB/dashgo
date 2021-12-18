import { Flex } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <NotificationsNav />

      <Profile />
    </Flex>
  );
}

export default Header;