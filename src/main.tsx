import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { routeTree } from './routes/routeTree.gen';

import '@fontsource-variable/noto-sans-kr/400.css';
import '@fontsource-variable/noto-sans-kr/500.css';
import '@fontsource-variable/noto-sans-kr/700.css';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const el = document.getElementById('root');
if (!el) {
  throw new Error('Root element #root not found');
}

const queryClient = new QueryClient();

createRoot(el).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
