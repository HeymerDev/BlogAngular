import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global.service';


@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article
  public status!: string
  public image!: File
  public isEdit: boolean
  public pageTitle: string

  /**
   * The constructor initializes an instance of the ArticleService and creates a new instance of the
   * Article class.
   * @param {ArticleService} _articleService - The `_articleService` parameter is an instance of the
   * `ArticleService` class. It is a private property that is injected into the constructor using
   * dependency injection. This allows the component to have access to the methods and properties of the
   * `ArticleService` class.
   */
  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.article = new Article('', '', '', '', null)
    this.isEdit = true
    this.pageTitle = 'Editar Articulo'
  }

  ngOnInit(): void {
    this.getArticle()
  }

  /**
   * The onSubmit function updates an article and its image, if provided, and navigates to the
   * article's page.
   */
  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status === 'success') {
          this.status = 'success'
          this.article = response.article
          this._router.navigate(['/blog/article/', this.article._id])

          /* The code block `if (this.image) { ... } else { ... }` is checking if an image file has
          been selected by the user. */
          if (this.image) {
            this._articleService.upload(this.article._id, this.image).subscribe(
              response => {
                console.log(response)
                this._router.navigate(['/blog/article/', this.article._id])
              },
              error => {
                console.log(error)
              }
            );
          };

        } else {
          this.status = 'error'
        }
      },
      error => {
        console.log(error);
        this.status = 'error'
      }
    );
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0]
  }

  /**
   * The function `getArticle()` retrieves an article based on the provided ID and handles the response
   * and error cases accordingly.
   */
  getArticle() {
    this._route.params.subscribe(params => {
      let id = params['id']

      /* The code is making a GET request to the `getArticle()` method of the `ArticleService` class, passing
      the `id` parameter. It then subscribes to the response of the request and handles it accordingly. */
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

}
