import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    {path: 'home', component: HomeComponent},
    {
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.routes')
        .then(r => r.CURSOS_ROUTES)
    },
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: '**', redirectTo:'home', pathMatch: 'full' }
];
