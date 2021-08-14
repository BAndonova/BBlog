import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost, Itheme } from './shared/interfaces';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // "title": "BBlog"

  recentPosts: IPost[] | undefined;
  toggleTemplate = false;

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) {
    this.fetchRecentPosts();
    this.userService.getProfileInfo().subscribe({
      error: () => {
        this.userService.user = null;
      }
    })
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService
      .loadRecentPosts()
      .subscribe((posts) => (this.recentPosts = posts));
  }
}
