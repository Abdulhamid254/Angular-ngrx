import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
       import('./pages/pages.routes').then((m) => m.pagesRoutes)
  },
  {
    path: 'register',
    loadChildren: () =>
       import('./auth/auth.routes').then((m) => m.registerRoutes)
  },
];

