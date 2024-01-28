import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// import type { AppRouter } from '../../server/src/router';


// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const trpc: any = createTRPCProxyClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      headers: () => {
        return {
          Authorization: String(localStorage.getItem('token')),
        };
      },
    }),
  ],
});



