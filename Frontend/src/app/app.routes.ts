import { Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesFormComponent } from './components/movies-form/movies-form.component';

export const routes: Routes = [
    {
        path:'',
        component: MoviesListComponent
    },
    {
        path: 'movies',
        component: MoviesListComponent
    },
    {
        path: 'movies/create',
        component: MoviesFormComponent
    },
    {
        path: 'movies/edit/:id',
        component: MoviesFormComponent
    }
];
