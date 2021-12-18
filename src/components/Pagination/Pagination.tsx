import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import PaginationItem from './PaginationItem';

const Pagination: React.FC = () => {
  return (
    <HStack
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent={true} />
        <PaginationItem number={2} isCurrent={false} />
        <PaginationItem number={3} isCurrent={false} />
        <PaginationItem number={4} isCurrent={false} />
      </HStack>
    </HStack>
  );
}

export default Pagination;