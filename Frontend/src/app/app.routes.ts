import { Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesFormComponent } from './components/update-movie/movies-form.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { LoginComponent } from './pages/login/login.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/reports/reports.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path: 'pedidos',
        component: MoviesListComponent
    },
    {
        path: 'movies/create',
        component: AddMovieComponent
    },
    {
        path: 'movies/edit/:id',
        component: MoviesFormComponent
    },
    { 
        path: 'providers', 
        component: ProvidersComponent 
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    }
];
