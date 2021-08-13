import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { BooksComponent } from './core/books/books.component';
import { CookingComponent } from './core/cooking/cooking.component';
import { LoveComponent } from './core/love/love.component';
import { PostsAllComponent } from './core/posts-all/posts-all.component';
import { QuotesComponent } from './core/quotes/quotes.component';
import { RecentPostsComponent } from './core/recent-posts/recent-posts.component';
import { TripsComponent } from './core/trips/trips.component';
import { DetailsThemeRoutingModule } from './details/details-theme-routing.module';
import { ThemesComponent } from './details/themes/themes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'cooking',
    component: CookingComponent
  },
  {
    path: 'posts-all',
    component: PostsAllComponent
  },
  {
    path: 'recent-posts',
    component: RecentPostsComponent
  },
  // {
  //   path: 'quotes',
  //   component: QuotesComponent
  // },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'themes',
    component: ThemesComponent
  },
  {
    path: 'love-yourself',
    component: LoveComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DetailsThemeRoutingModule, UserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
