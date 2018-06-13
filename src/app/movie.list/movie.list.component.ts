import { Component, EventEmitter } from "@angular/core";

import { Movie } from "../models/Movie";
import { MovieListDataService } from "../services/movie.list.data.service";


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
}
