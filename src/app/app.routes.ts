
import { Routes } from '@angular/router';
import { FilmsPageComponent } from './films-page/films-page.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

export const appRoutes: Routes = [
    { path: '', component: FilmsPageComponent },
    { path: 'films', component: FilmsPageComponent },
];
