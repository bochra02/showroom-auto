import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CarDetails } from './components/car-details/car-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'car/:id', component: CarDetails },
  { path: '**', redirectTo: '' }
];