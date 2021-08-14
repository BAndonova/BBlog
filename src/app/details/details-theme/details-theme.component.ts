import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private userService: UserService,
    private router: Router
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
  onLikeClick(post: any) {
    this.recentPosts?.find((x) => x._id === post._id)?.likes.push('like');
    post.likes = this.recentPosts?.find((x) => x._id === post._id)?.likes
    
  }
  onDislikeClick(id: any) {
    this.recentPosts?.find((x) => x.likes.push('dislike'));
  }

  createPost(form: NgForm): void {
    if (form.invalid) { return; }
    this.contentService.savePost(form.value).subscribe({
      next: () => {
        this.router.navigate(['/themes']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
