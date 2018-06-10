import { Injectable } from "@angular/core";

import { Movie } from "./Movie";


@Injectable()
export class MovieListDataService {
    getMovies(): Movie[] {
        return this.movies;
    }


    movies: Movie[] = [
        {
            "name": "The Dark Knight",
            "releaseYear": 2008,
            "reviews": 9.8,
            "revenue": 1233235654
        },
        {
            "name": "The Avenger",
            "releaseYear": 2012,
            "reviews": 9.0,
            "revenue": 1567345345
        },
        {
            "name": "Iron Man",
            "releaseYear": 2008,
            "reviews": 8.7,
            "revenue": 798989234
        },
        {
            "name": "The Incredible Hulk",
            "releaseYear": 2009,
            "reviews": 7.9,
            "revenue": 847583573
        },
        {
            "name": "Man Of Steel",
            "releaseYear": 2014,
            "reviews": 8.1,
            "revenue": 588390375
        },
        {
            "name": "Batman vs Superman",
            "releaseYear": 2016,
            "reviews": 7.8,
            "revenue": 838457490
        },
        {
            "name": "Wonder Woman",
            "releaseYear": 2017,
            "reviews": 8.9,
            "revenue": 984557467
        },
        {
            "name": "The Black Panther",
            "releaseYear": 2018,
            "reviews": 9.5,
            "revenue": 1584968476
        },
        {
            "name": "The Shawshank Redemption",
            "releaseYear": 1993,
            "reviews": 9.9,
            "revenue": 885475835
        },
        {
            "name": "The Proposal",
            "releaseYear": 2005,
            "reviews": 7.9,
            "revenue": 473854838
        },
        {
            "name": "Pretty Woman",
            "releaseYear": 1991,
            "reviews": 8.7,
            "revenue": 594828944
        },
        {
            "name": "Ocean Eleven",
            "releaseYear": 2001,
            "reviews": 9.0,
            "revenue": 848574747
        },
        {
            "name": "Deadpool",
            "releaseYear": 2016,
            "reviews": 9.5,
            "revenue": 894733794
        }
    ];
}
