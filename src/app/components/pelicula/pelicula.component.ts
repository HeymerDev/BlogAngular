import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  /* `@Input() pelicula!: Pelicula` is a decorator that allows the `pelicula` property to be passed as an
  input to the `PeliculaComponent` from its parent component. The `!` symbol indicates that the
  property will be initialized later. */
  @Input() pelicula!: Pelicula
  @Output() MarcarFavorita = new EventEmitter()

  constructor() {
  }
  ngOnInit() {

  }

  /**
   * This function emits an event to mark a movie as a favorite.
   * @param {any} event - The event parameter is of type "any" and represents the event that triggered
   * the method. It could be a mouse click, a key press, or any other type of event.
   * @param {Pelicula} pelicula - Pelicula is a variable of type Pelicula that represents a movie
   * object. It is being passed as a parameter to the function.
   */
  seleccionar(event: any, pelicula: Pelicula) {
    this.MarcarFavorita.emit({
      pelicula: pelicula
    })
  }
}
