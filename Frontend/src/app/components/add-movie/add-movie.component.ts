import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  movie = {
    title: '',
    description: '',
    producer: 0,
    time: 0,
    image: ''
  };

  constructor(private moviesService: MoviesService, private router: Router) {}

  submitMovie() {
    this.moviesService.createMovie(this.movie).subscribe(
      res => {
        swal.fire('Añadido exitosamente', '', 'success')
        this.router.navigate(['/']);
      },
      err => swal.fire('Error agregando proveedor:', err, 'error')
    );
  }
}
