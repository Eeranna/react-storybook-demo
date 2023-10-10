/** @type { import('@storybook/react').Preview } */

import React from 'react';

import { ThemeProvider } from '@emotion/react';

import '@storybook/addon-console';
//import {withConsole} '@storybook/addon-console';

// import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

// import { ChakraProvider, theme, CSSReset  } from '@chakra-ui/react'

// addDecorator(story => {
//   <ThemeProvider theme={theme}>
//     <CSSReset/>
//     {story()}
//   </ThemeProvider>
// })

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};



export default preview;

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <CSSReset />
//       <Box m="4">
//         <Story />
//       </Box>
//     </ThemeProvider>
//   )
// ]
