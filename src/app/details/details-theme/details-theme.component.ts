import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { IPost, Itheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.css'],
})
export class DetailsThemeComponent {
  theme: Itheme | undefined;
  recentPosts: IPost[] | undefined;
  id: any;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.fetchTheme();
    this.fetchRecentPosts();
    this.id = this.activatedRoute.snapshot.params.themeId;
  }

  fetchTheme(): void {
    this.theme = undefined;
    const id = this.activatedRoute.snapshot.params.themeId;
    this.contentService.loadTheme(id).subscribe(theme => this.theme = theme);
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts().subscribe((posts) => {
      console.log(posts); this.recentPosts = posts.filter((x) => x.themeId.posts );
    });
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  onLikeClick(id: any) {
    console.log(id);
    console.log(this.recentPosts?.find((x) => x._id === id));
    this.recentPosts?.find((x) => x._id === id)?.likes.push('like');
  }
  onDislikeClick(id: any) {
    this.recentPosts?.find((x) => x.likes.push('dislike'));
  }
}
