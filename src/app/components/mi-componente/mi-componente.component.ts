import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente {
    public title: string;

    constructor() {
        this.title = 'Hecho por Heymer Meza'
        console.log('componente cargado');
    }
}