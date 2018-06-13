import { Component } from "@angular/core";

import { Movie } from "../models/Movie";
import { MovieListDataService } from "../services/movie.list.data.service";


const componentMetadata: any = {
    selector: "ai-movie-info",

    providers: [
        MovieListDataService
    ],

    templateUrl: "./movie.info.component.html",

    styleUrls: [
        "./movie.info.component.css"
    ]
};


@Component(componentMetadata)
export class MovieInfoComponent {
    movieId: number;

    constructor(private movieDataService: MovieListDataService) {}

    movie: Movie = this.movieDataService
            .getMovieById(this.getMovieId());


    getMovieId(): number {
        let movieId: number = this.movieId
                ? this.movieId
                : 1;

        return movieId;
    }
}
