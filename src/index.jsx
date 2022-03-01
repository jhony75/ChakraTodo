import { render } from 'react-dom';
import { App } from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';

render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initailColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
