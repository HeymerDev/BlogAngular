import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Creado Por Heymer Meza';
  private originalTitle!: string;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.originalTitle = this.titleService.getTitle();

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }
  

  ngOnDestroy() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      this.titleService.setTitle(this.originalTitle);
    } else {
      this.titleService.setTitle('Nuevos Articulos Publicados');
    }
  };

}




