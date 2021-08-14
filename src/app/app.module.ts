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
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    SharedModule,
    DetailsModule
    
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
