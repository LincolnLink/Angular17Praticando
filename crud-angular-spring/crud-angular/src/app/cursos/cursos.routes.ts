import { Routes } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';


export const CURSOS_ROUTES: Routes = [
    {path: '', component: CursosComponent},
    {path: ':id', component: CursosFormComponent}
]