import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'ari',
    loadComponent: () => import('./ari/ari.page').then( m => m.AriPage)
  },
  {
    path: 'duda',
    loadComponent: () => import('./duda/duda.page').then( m => m.DudaPage)
  },
  {
    path: 'gabi',
    loadComponent: () => import('./gabi/gabi.page').then( m => m.GabiPage)
  },
  {
    path: 'vi',
    loadComponent: () => import('./vi/vi.page').then( m => m.ViPage)
  },
  {
    path: 'vitao',
    loadComponent: () => import('./vitao/vitao.page').then( m => m.VitaoPage)
  },

];
