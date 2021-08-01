import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost, Itheme } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // "title": "BBlog"

  recentPosts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchRecentPosts();
  }

  fetchRecentPosts(): void {
    this.recentPosts = [
      {
        theme: 'Test1',
        id: '1',
        text: 'opit 13',
      },
      {
        theme: 'Test2',
        id: '2',
        text: 'opit 2',
      },
      {
        theme: 'Test32',
        id: '3',
        text: 'opit 13',
      },
    ];
    this.contentService
      .loadRecentPosts()
      .subscribe((posts) => (this.recentPosts = posts));
  }
}
