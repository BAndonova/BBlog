import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TripsComponent } from './trips/trips.component';
import { BooksComponent } from './books/books.component';
import { CookingComponent } from './cooking/cooking.component';
import { LoveComponent } from './love/love.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { DetailsComponent } from './details/details.component';
import { PostsAllComponent } from './posts-all/posts-all.component';
import { QuotesComponent } from './quotes/quotes.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    WelcomeComponent,
    TripsComponent,
    BooksComponent,
    CookingComponent,
    LoveComponent,
    RecentPostsComponent,
    DetailsComponent,
    PostsAllComponent,
    QuotesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    WelcomeComponent,
    TripsComponent,
    BooksComponent,
    CookingComponent,
    LoveComponent,
    RecentPostsComponent,
    DetailsComponent,
    PostsAllComponent,
    QuotesComponent
  ]
})
export class CoreModule { }
