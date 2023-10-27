import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  /* These are public properties of the `PeliculasComponent` class. */
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita!: Pelicula
  public fecha: any


  /**
   * The constructor initializes variables and retrieves movie data from a service.
   * @param {PeliculaService} _peliculaService - _peliculaService is a private property of the class
   * that is of type PeliculaService. It is used to access the methods and properties of the
   * PeliculaService class within the current class.
   */
  constructor(private _peliculaService: PeliculaService) {
    this.titulo = 'la mejor pagina de peliculas'
    console.log('constructor lanzado');
    /* `this.peliculas = this._peliculaService.getPeliculas()` is assigning the value returned by the
    `getPeliculas()` method of the `PeliculaService` instance to the `peliculas` property of the
    `PeliculasComponent` class. This is likely retrieving an array of movie objects from a data
    source and storing them in the `peliculas` property for use in the component's template or other
    methods. */
    this.peliculas = this._peliculaService.getPeliculas()
    this.fecha = new Date(2020, 8, 12)
  }

  /* These are lifecycle hooks in Angular that are implemented in the `PeliculasComponent` class. */
  ngOnInit(): void {
    console.log(this.peliculas)
    console.log('On Init Lanzado');
    console.log(this._peliculaService.holaMundo());

  }

  ngDoCheck(): void {
    console.log('DoCheck Lanzado');
  }

  cambiarTitulo() {
    this.titulo = 'titulo cambiado'
  }

  ngOnDestroy(): void {

  }

  /**
   * The function sets the "favorita" property to the value of the "pelicula" property of the "event"
   * object.
   * @param {any} event - The parameter "event" is of type "any", which means it can accept any type of
   * value. It is likely used to capture an event object that contains information about a user action,
   * such as clicking a button or selecting an option. The code then accesses the "pelicula" property of
   */
  mostarFavorita(event: any) {
    this.favorita = event.pelicula
  }
}
