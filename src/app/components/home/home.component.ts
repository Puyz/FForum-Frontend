import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Statistics } from 'src/app/models/statistics';
import { PostService } from 'src/app/services/post.service';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  posts: Post[] = [];
  statistics!: Statistics;
  dataLoaded = false;
  statisticsDataLoaded = false;

  constructor(private postService: PostService, private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.getPosts();
    this.getStatistics();
  }

  getPosts() {
    this.postService.getPosts().subscribe(response => {
      this.posts = response.data;
      this.dataLoaded = true;
    });
  }

  getStatistics() {
    this.statisticsService.getStatistics().subscribe(response => {
      this.statistics = response.data;
      this.statisticsDataLoaded = true;
    });
  }

}
