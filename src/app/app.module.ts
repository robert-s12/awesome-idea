import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRootComponent } from "./app.component";
import { MovieListComponent } from "./movie.list/movie.list.component";
import { MovieInfoComponent } from "./movie.info/movie.info.component";
import { MOVIE_ROUTING } from "./app.routing";


@NgModule({
    declarations: [
        AppRootComponent,
        MovieListComponent,
        MovieInfoComponent
    ],

    imports: [
        BrowserModule,
        MOVIE_ROUTING
    ],

    providers: [],

    bootstrap: [
        AppRootComponent
    ]
})
export class AppModule {
}
