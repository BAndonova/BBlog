import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsModule } from './details/details.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    SharedModule,
    DetailsModule
    
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
