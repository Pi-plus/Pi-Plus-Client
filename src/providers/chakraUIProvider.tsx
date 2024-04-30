'use client';

import type { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const ChakraUIProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
export default ChakraUIProvider;
