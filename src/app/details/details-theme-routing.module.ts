import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsAllComponent } from '../core/posts-all/posts-all.component';
import { NewThemeComponent } from './new-theme/new-theme.component';

const routes: Routes = [
    //   { path: '', pathMatch: 'full', component: PostsAllComponent },
      { path: 'themeId', component: PostsAllComponent },
      { path: 'new-theme', component: NewThemeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsThemeRoutingModule {}
