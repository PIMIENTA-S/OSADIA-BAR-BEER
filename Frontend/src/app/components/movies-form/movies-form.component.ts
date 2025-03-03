import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent {
  
  movie: Movie = {
    _id: '',
    title: '',
    description: '',
    producer: '',
    time: '',
    image: ''
  }

  edit: boolean = false;

  constructor(
    private moviesService: MoviesService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.moviesService.getMovie(params['id']).subscribe(
        res => {
          this.movie = res;
          this.edit = true;
        }
      )
    }
  }

  submitMovie(){
    this.moviesService.createMovie(this.movie).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

  updateMovie(){
    this.moviesService.updateMovie(this.movie._id, this.movie)
    .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/'])
        },
        err => console.log(err)
    )
  }

}
