import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  movies: Movie[] = [];

  constructor(private movieService: MoviesService){}

  ngOnInit(){
    this.getMovies();
  }

  getMovies(){
    return this.movieService.getMovies().subscribe(
      res => {
        this.movies = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  deleteMovie(id:string){
    return this.movieService.deleteMovie(id).subscribe(
      res => {
        this.getMovies()
      },
      err => console.log(err)
    )
  }
}
