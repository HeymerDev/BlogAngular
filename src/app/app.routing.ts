import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { ArticleComponent } from "./components/article/article.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";

// array de routes

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/article/:id', component: ArticleComponent },
    { path: 'blog/new-article', component: ArticleNewComponent },
    { path: 'blog/edit-article/:id', component: ArticleEditComponent },
    { path: 'buscar/:search', component: SearchComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina', component: PaginaComponent },
    { path: 'pagina/:name', component: PaginaComponent },
    { path: 'pagina/:name/:apellido', component: PaginaComponent },
    { path: '**', component: ErrorPageComponent }
];

export const appRoutinProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes)