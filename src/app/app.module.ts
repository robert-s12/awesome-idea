import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRootComponent } from "./app.component";
import { MovieListComponent } from "./movie.list/movie.list.component";


@NgModule({
    declarations: [
        AppRootComponent,
        MovieListComponent
    ],

    imports: [
        BrowserModule
    ],

    providers: [],

    bootstrap: [
        AppRootComponent
    ]
})
export class AppModule {
}
