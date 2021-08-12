import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TripsComponent } from './trips/trips.component';
import { BooksComponent } from './books/books.component';
import { CookingComponent } from './cooking/cooking.component';
import { LoveComponent } from './love/love.component';



import { QuotesComponent } from './quotes/quotes.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocalStorage } from './injection-tokens';
import { AuthActivate } from './guards/auth.activate';
import { PostsAllComponent } from './posts-all/posts-all.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';


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
    PostsAllComponent,
    RecentPostsComponent,
    QuotesComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    WelcomeComponent,
    TripsComponent,
    BooksComponent,
    CookingComponent,
    LoveComponent,
    PostsAllComponent,
    RecentPostsComponent,
    QuotesComponent,
  ],
  providers: [
    {
      provide: LocalStorage,
      useFactory: (platformId: Object) => {

        if (isPlatformBrowser(platformId)) {
          return window.localStorage;
        }
        if (isPlatformServer(platformId)) {
          return class implements Storage {
            length = 0;
            private data: Record<string, string> = {};

            clear(): void {
              this.data = {};
            }

            getItem(key: string): string | null {
              return this.data[key];
            }

            key(index: number): string | null {
              throw new Error('Method not implemented.');
            }

            removeItem(key: string): void {
              const { [key]: removedItem, ...others } = this.data;
              this.data = others;
            }

            setItem(key: string, value: string): void {
              this.data[key] = value;
            }
          }
        }
        throw Error('NOT IMPLEMENTED');
      },
      deps: [PLATFORM_ID]
    },
    AuthActivate
  ]
})
export class CoreModule {}
