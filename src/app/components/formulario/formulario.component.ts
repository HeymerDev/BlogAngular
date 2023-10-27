import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public user: any

  constructor() {
    this.user = {
      nombre: '',
      apellido: '',
      bio: '',
      genero: ''
    }
  }

  onSubmit() {
    alert('formulario enviado')
    console.log(this.user)
  }

  click() {
    alert('hola mundo')
  }
}
