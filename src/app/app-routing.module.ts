import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "post/:postId", component: PostDetailsComponent },
    { path: "new/post", component: NewPostComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }