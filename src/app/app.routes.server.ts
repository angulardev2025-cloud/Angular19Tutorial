import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'details/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => Promise.resolve([{id: '1'}]),
  },
  {
    path: 'user/edit/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => Promise.resolve([{id: '1'}]),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
