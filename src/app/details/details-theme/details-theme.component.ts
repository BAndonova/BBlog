import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { Itheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.css']
})
export class DetailsThemeComponent {

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchTheme();
  }

  theme: Itheme | undefined

  fetchTheme(): void {
    this.theme = undefined;
    const id = this.activatedRoute.snapshot.params.themeId;
    this.contentService.loadTheme(id).subscribe(theme => this.theme = theme);
  }
}

