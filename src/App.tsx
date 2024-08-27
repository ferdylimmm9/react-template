import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './constants/route/route';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './constants/api/query-client';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
}
