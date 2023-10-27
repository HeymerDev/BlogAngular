/* Importing the `Injectable` decorator from the `@angular/core` module and the `Pelicula` model from
the `../models/pelicula` file. The `Injectable` decorator is used to mark a class as a dependency
injection provider, while the `Pelicula` model is likely used to define the structure of a movie
object in the application. */
import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {

    /* `public peliculas: Pelicula[]` is declaring a public property called `peliculas` of type
    `Pelicula` array. This property is likely used to store an array of movie objects in the
    `PeliculaService` class. The `public` keyword makes the property accessible from outside the
    class, so it can be accessed and modified by other components or services in the application. */
    public peliculas: Pelicula[]

    /**
     * This is a constructor function that initializes an array of movie objects with their titles,
     * release years, and image URLs.
     */
    constructor() {
        this.peliculas = [
            new Pelicula('Spiderman No Way Home', 2019, 'https://caracoltv.brightspotcdn.com/dims4/default/ee45ef2/2147483647/strip/true/crop/1080x1350+0+0/resize/1000x1250!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F7c%2F92%2F9e25d50d45fdb395f621fcf44185%2Fspiderman.jpg'),

            new Pelicula('Avengers', 2019, 'https://lumiere-a.akamaihd.net/v1/images/the_avengers_2012_poster_july_disney_plus_drops_d4bd9c6e.png'),

            new Pelicula('Black Panther', 2019, 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg')

        ]
    }

    /**
     * The function returns a greeting message from an Angular service.
     * @returns a string that says "Hola mundo desde un servicio de Angular" which means "Hello world
     * from an Angular service" in Spanish.
     */
    holaMundo() {
        return 'Hola mundo desde un servicio de Angular'
    }

    /* `getPeliculas()` is a method in the `PeliculaService` class that returns the array of movie
    objects stored in the `peliculas` property. When this method is called, it simply returns the
    `peliculas` array. This method can be used by other components or services in the application to
    retrieve the list of movies stored in the `PeliculaService`. */
    getPeliculas() {
        return this.peliculas
    }
}