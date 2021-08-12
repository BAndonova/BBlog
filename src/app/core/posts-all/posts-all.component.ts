import { Component, OnInit } from '@angular/core';
import { Itheme } from 'src/app/shared/interfaces/theme';
import {ContentService} from '../../content.service'

@Component({
  selector: 'app-posts-all',
  templateUrl: './posts-all.component.html',
  styleUrls: ['./posts-all.component.css']
})
export class PostsAllComponent {

  themes: Itheme[] | undefined;
  
  constructor(private contentService: ContentService) { 
    this.fetchThemes();
  }
  
  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes)
  }

}