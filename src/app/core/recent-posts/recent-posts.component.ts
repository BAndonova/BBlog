import { Component, Input } from '@angular/core';
import {  IPost  } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent {

    @Input() title!: string;
    @Input() items: IPost[] | undefined;

  constructor() { }

}