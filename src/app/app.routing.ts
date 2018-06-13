import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MovieContainerComponent } from "./movie.container/movie.container.component";
import { MovieListComponent } from "./movie.list/movie.list.component";
import { MovieInfoComponent } from "./movie.info/movie.info.component";


const APP_ROUTES: Routes = [
    {
        path: "movies",
        component: MovieContainerComponent,
        children: [
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
            }
        ]
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "movies"
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "movies"
    }
];


export const MOVIE_ROUTING: ModuleWithProviders = RouterModule
        .forRoot(APP_ROUTES);
