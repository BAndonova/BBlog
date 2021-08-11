import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsThemeComponent } from './details-theme/details-theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';



@NgModule({
  declarations: [
    DetailsThemeComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailsThemeComponent,
    NewThemeComponent
    ]
})
export class DetailsModule { }
