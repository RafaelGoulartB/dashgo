import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import React from 'react';

interface NavLinkProps extends LinkProps {
  icon: ElementTpye;

}
const NavLink: React.FC<NavLinkProps> = ({ icon, children, ...rest }) => {
  return (
    <Link display="flex" align="center" py="1" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}

export default NavLink;