import { Routes } from '@angular/router';
import { CtsHome } from './components/cts-home/cts-home';
import { CtDetail } from './components/ct-detail/ct-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: CtsHome },
    { path: 'home/cts/:id', component: CtDetail },
    { path: '**', redirectTo: 'home' }
];
