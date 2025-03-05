import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import swal from 'sweetalert2'

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  movies: Movie[] = [];

  movie: Movie = {
    _id: '',
    title: '',
    description: '',
    producer: 0,
    time: 0,
    image: ''
  }


  constructor(private movieService: MoviesService,
        private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this.getMovies();
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.movieService.getMovie(params['id']).subscribe(
        res => {
          this.movie = res;
        }
      )
    }
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
        swal.fire('Eliminado exitosamente', '', 'success')
        this.getMovies()

      },
      err => console.log(err)
    )
  }

  incrementStock(movie: any) {
    this.movie._id = movie._id
    this.movie.title = movie.title
    this.movie.description = movie.description
    this.movie.producer = ++movie.producer
    this.movie.time = movie.time
    this.movie.image = movie.image
    this.updateMovie()

  }
  
  decrementStock(movie: any) {
    if (movie.producer > 0) {
      this.movie._id = movie._id
      this.movie.title = movie.title
      this.movie.description = movie.description
      this.movie.producer = --movie.producer
      this.movie.time = movie.time
      this.movie.image = movie.image
      this.updateMovie()
    }
  }

  updateMovie(){

    this.movieService.updateMovie(this.movie._id!, this.movie)
    .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
    )
  }

}