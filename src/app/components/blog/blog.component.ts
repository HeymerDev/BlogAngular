import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles!: Article[]
  public url: string

  /**
   * This is a constructor function that takes an instance of the ArticleService class as a private
   * parameter.
   * @param {ArticleService} _articleService - The `_articleService` parameter is a private instance of
   * the `ArticleService` class that is being injected into the constructor of another class. This is an
   * example of dependency injection, where the `ArticleService` is being provided to the class that
   * needs it, rather than the class creating an instance of
   */
  constructor(
    private _articleService: ArticleService
  ) {
    this.url = Global.url
  }

  /**
   * The ngOnInit function calls the getArticles method from the _articleService and logs the response or
   * error to the console.
   */
  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        } else {

        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
