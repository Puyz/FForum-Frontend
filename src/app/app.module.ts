import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeagoPipe } from './pipes/timeago.pipe';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PostMessageComponent } from './components/post-message/post-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomeComponent,
    PostComponent,
    TimeagoPipe,
    PostDetailsComponent,
    PostMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
