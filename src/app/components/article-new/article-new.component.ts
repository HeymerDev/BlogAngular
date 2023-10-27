import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article
  public status!: string
  public image!: File
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
    this.pageTitle = 'Crear Articulo'
  }

  ngOnInit(): void {

  }

  /**
   * The onSubmit function sends a request to create a new article and handles the response by updating
   * the status and navigating to the blog page if successful, or setting the status to error if there is
   * an error.
   */
  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status === 'success') {
          this.status = 'success'
          this.article = response.article
          this._router.navigate(['/blog'])

          if (this.image) {
            this._articleService.upload(this.article._id, this.image).subscribe(
              response => {
                console.log(response)
                this._router.navigate(['/blog'])
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

}
