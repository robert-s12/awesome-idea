import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Movie } from "../models/Movie";
import { MovieListDataService } from "../services/movie.list.data.service";


const COMPONENT_METADATA: any = {
    selector: "ai-movie-info",

    providers: [
        MovieListDataService
    ],

    templateUrl: "./movie.info.component.html",

    styleUrls: [
        "./movie.info.component.css"
    ]
};


@Component(COMPONENT_METADATA)
export class MovieInfoComponent implements OnInit {
    constructor(
        private movieDataService: MovieListDataService,
        private activatedRoute: ActivatedRoute) {}

    movie: Movie;


    getMovieId(movieId: any): number {
        movieId = isNaN(movieId) ? 1 : Number(movieId);
        return movieId;
    }


    loadMovieInformation(movieId: number): void {
        movieId = this.getMovieId(movieId);
        this.movie = this.movieDataService
                .getMovieById(movieId);
    }


    ngOnInit(): void {
        this.activatedRoute.params
                .subscribe(params => {
                    let movieId = params["movieId"];
                    this.loadMovieInformation(movieId);
                })
    }
}
