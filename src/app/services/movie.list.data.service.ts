import { Injectable } from "@angular/core";

import { Movie } from "../models/Movie";


@Injectable()
export class MovieListDataService {
    getMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(id: number): Movie {
        let movie: Movie = null;

        this.movies.forEach((currentMovie: Movie) => {
            if (currentMovie.id === id) {
                movie = currentMovie;
                return;
            }
        });

        return movie;
    }


    movies: Movie[] = [
        {
            id: 1,
            name: "The Dark Knight",
            releaseYear: 2008,
            reviews: 9.8,
            revenue: 1233235654,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 2,
            name: "The Avenger",
            releaseYear: 2012,
            reviews: 9.0,
            revenue: 1567345345,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 3,
            name: "Iron Man",
            releaseYear: 2008,
            reviews: 8.7,
            revenue: 798989234,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 4,
            name: "The Incredible Hulk",
            releaseYear: 2009,
            reviews: 7.9,
            revenue: 847583573,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 5,
            name: "Man Of Steel",
            releaseYear: 2014,
            reviews: 8.1,
            revenue: 588390375,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 6,
            name: "Batman vs Superman",
            releaseYear: 2016,
            reviews: 7.8,
            revenue: 838457490,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 7,
            name: "Wonder Woman",
            releaseYear: 2017,
            reviews: 8.9,
            revenue: 984557467,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 8,
            name: "The Black Panther",
            releaseYear: 2018,
            reviews: 9.5,
            revenue: 1584968476,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 9,
            name: "The Shawshank Redemption",
            releaseYear: 1993,
            reviews: 9.9,
            revenue: 885475835,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 10,
            name: "The Proposal",
            releaseYear: 2005,
            reviews: 7.9,
            revenue: 473854838,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 11,
            name: "Pretty Woman",
            releaseYear: 1991,
            reviews: 8.7,
            revenue: 594828944,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 12,
            name: "Ocean Eleven",
            releaseYear: 2001,
            reviews: 9.0,
            revenue: 848574747,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        },
        {
            id: 13,
            name: "Deadpool",
            releaseYear: 2016,
            reviews: 9.5,
            revenue: 894733794,
            duration: "2h 32min",
            genre: "Action, Crime, Drama",
            releaseDateText: "18 July 2008",
            description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
            imgPath: "/assets/batman.jpg"
        }
    ];
}
