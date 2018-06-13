import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MovieListComponent } from "./movie.list/movie.list.component";
import { MovieInfoComponent } from "./movie.info/movie.info.component";


const APP_ROUTES: Routes = [
    {
        path: "index",
        component: MovieListComponent
    },
    {
        path: "info/:movieId",
        component: MovieInfoComponent
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "index"
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "index"
    }
];


export const MOVIE_ROUTING: ModuleWithProviders = RouterModule
        .forRoot(APP_ROUTES);
