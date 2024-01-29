// movie-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.movieId = 0; // Vagy az inicializációhoz megfelelő értéket választhatod
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id'));
      this.loadMovieDetails();
    });
  }

  loadMovieDetails() {
    this.movieDetails = this.movieService.getMovieDetails(this.movieId);
  }
}