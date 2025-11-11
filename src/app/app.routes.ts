import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'match', loadComponent: () => import('./pages/components/match/match.component'), data: { title: 'Partido', showInNavBar: true } },
  { path: 'training', loadComponent: () => import('./pages/components/training/training.component'), data: { title: 'Entrenamiento', showInNavBar: true } },
  { path: 'history', loadComponent: () => import('./pages/components/history/history.component'), data: { title: 'Historial', showInNavBar: true } },
  { path: 'profile', loadComponent: () => import('./pages/components/profile/profile.component'), data: { title: 'Perfil', showInNavBar: true } },
  { path: '**', redirectTo: 'home' }
];
