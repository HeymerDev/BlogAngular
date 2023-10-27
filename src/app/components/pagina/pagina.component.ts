import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  // de esta manera se recogen parametros desde las urls

  public name: string = ''
  public apellido: string = ''

  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      this.name = params['name']
      this.apellido = params['apellido']
    })

  }

  redireccion() {
    this._router.navigate(['/pagina', 'heymer', 'meza'])
  }

}
