
import { Routes } from '@angular/router';
import { FilmsPageComponent } from './app/films-page/films-page.component';

export const appRoutes: Routes = [
    { path: '', component: FilmsPageComponent },
    { path: 'films', component: FilmsPageComponent },

];
