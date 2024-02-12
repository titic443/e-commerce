import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: HeaderComponent },
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
];
