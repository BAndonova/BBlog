import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost, Itheme, } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-theme',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  themes: Itheme[] | undefined;
  recentPosts: IPost[] | undefined;

  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) {
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadRecentPosts(5).subscribe(posts => this.recentPosts = posts);
  }
}