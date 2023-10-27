import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global.service';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { response } from 'express';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public url: string
  public article!: Article

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url
  }

  /**
   * The ngOnInit function retrieves an article based on the id parameter from the route and assigns it
   * to the article property, or navigates to a different route if there is an error or the article is
   * not found.
   */
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article
          } else {
            this._router.navigate(['/**'])
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/**'])

        }
      );

    })

  }

  delete(id: any) {
    this._articleService.delete(id).subscribe(
      response => {
        this._router.navigate(['/blog'])
      },
      error => {
        console.log(error);
      }
    )
  }

}
