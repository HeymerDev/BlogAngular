/* These are import statements in TypeScript. */
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Article } from "../models/article";
import { Global } from "./global.service";

@Injectable()
export class ArticleService {

    public url: string;

    /**
     * This is a constructor function that initializes a private variable _http with an instance of
     * HttpClient and sets a url property to a global url value.
     * @param {HttpClient} _http - _http is a private instance of the HttpClient class, which is a service
     * provided by Angular for making HTTP requests to a server. It is used to send HTTP requests and
     * receive responses from a server using various HTTP methods such as GET, POST, PUT, DELETE, etc.
     */
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    pruebas() {
        return 'soy el servicio de articulos'
    }

    /* `getArticles()` is a method in the `ArticleService` class that returns an observable of type `any`.
    It sends an HTTP GET request to the server to retrieve a list of articles from the `articles`
    endpoint using the `HttpClient` service. The URL of the endpoint is constructed by concatenating the
    `url` property of the class with the string `'articles'`. */
    getArticles(last: any = null): Observable<any> {

        let articles = 'articles'

        if (last != null) {
            articles = 'articles/true'
        }

        return this._http.get(this.url + articles);
    }

    /* The `getArticle(articleId: any): Observable<any>` method is a function in the `ArticleService`
    class that retrieves a specific article from the server based on the provided `articleId`. */
    getArticle(articleId: any): Observable<any> {
        return this._http.get(this.url + 'article/' + articleId)
    }

    /**
     * The search function takes a search string as input and returns an Observable that makes an HTTP GET
     * request to the specified URL with the search string appended to it.
     * @param {string} searchString - A string that represents the search query. It is used to search for a
     * specific item or information.
     * @returns The `search` method is returning an `Observable` of type `any`.
     */
    search(searchString: string): Observable<any> {
        return this._http.get(this.url + '/search/' + searchString)
    }

    /* The `create(article: any): Observable<any>` method in the `ArticleService` class is used to create a
    new article on the server. */
    create(article: any): Observable<any> {
        let params = JSON.stringify(article)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url + 'save', params, { headers: headers })
    }

    upload(articleId: any, image: File): Observable<any> {
        const formData = new FormData();
        formData.append('image', image);

        return this._http.post(`${this.url}upload-image/${articleId}`, formData)
    }

    update(id: any, article: any): Observable<any> {
        let params = JSON.stringify(article)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.put(this.url + 'article/' + id, params, { headers: headers })
    }

    delete(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.delete(this.url + 'article/' + id, { headers: headers })
    }
}