import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsThemeComponent } from './details-theme/details-theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { DetailsThemeRoutingModule } from './details-theme-routing.module';



@NgModule({
  declarations: [
    DetailsThemeComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule,
    DetailsThemeRoutingModule
  ],
  exports: [
    DetailsThemeComponent,
    NewThemeComponent
    ]
})
export class DetailsModule { }
