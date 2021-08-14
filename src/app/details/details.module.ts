import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsThemeComponent } from './details-theme/details-theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { DetailsThemeRoutingModule } from './details-theme-routing.module';
import { ThemesComponent } from './themes/themes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailsThemeComponent,
    NewThemeComponent,
    ThemesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DetailsThemeRoutingModule,
  ],
  exports: [
    DetailsThemeComponent,
    NewThemeComponent,
    ThemesComponent
    ]
})
export class DetailsModule { }
