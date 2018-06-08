import { Routes } from '@angular/router';
import { TiposgastoComponent } from './tiposgasto/tiposgasto.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home',component: HomeComponent },
    { path: 'tiposgasto', component: TiposgastoComponent, }
];

