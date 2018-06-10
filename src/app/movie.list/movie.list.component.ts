import { Component, EventEmitter } from "@angular/core";

import { Movie } from "./Movie";
import { MovieListDataService } from "./movie.list.data.service";


const componentMetadata: any = {
    selector: "ai-movie-list",

    providers: [
        MovieListDataService
    ],

    templateUrl: "./movie.list.component.html",

    styleUrls: [
        "./movie.list.component.css"
    ]
};


@Component(componentMetadata)
export class MovieListComponent {
    constructor (private movieListService: MovieListDataService) {}

    movies: Movie[] = this.movieListService.getMovies();

    onLogMe() {
        console.log("Logging Movie Info");
    }
}
