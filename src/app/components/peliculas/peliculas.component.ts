import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;

  constructor() {
    this.titulo = 'la mejor pagina de peliculas'
    console.log('constructor lanzado');

  }

  ngOnInit(): void {
    console.log('On Init Lanzado');
  }

  ngDoCheck(): void {
    console.log('DoCheck Lanzado');
  }

  cambiarTitulo() {
    this.titulo = 'titulo cambiado'
  }

  ngOnDestroy(): void {

  }
}
