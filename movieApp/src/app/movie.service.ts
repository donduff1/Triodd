import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = [
    // itt lehet a filmek listája, vagy egy API-hívás eredménye
    { id: 1, title: 'Film 1', description: 'Leírás 1' },
    { id: 2, title: 'Film 2', description: 'Leírás 2' },
    // ...
  ];

  getMovies() {
    return this.movies;
  }

  getMovieDetails(movieId: number) {
    // Itt implementáld a kiválasztott film részletes adatainak lekérését
    return this.movies.find(movie => movie.id === movieId);
  }
}
