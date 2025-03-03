import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  BDURL: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.BDURL}/movies`)
  }

  getMovie(id: string):Observable<Movie>{
    return this.http.get<Movie>(`${this.BDURL}/movies/${id}`);
  }

  createMovie(movie: Movie):Observable<Movie>{
    return this.http.post<Movie>(`${this.BDURL}/movies/`, movie)
  }

  updateMovie(id: string, movie: Movie):Observable<Movie>{
    return this.http.put<Movie>(`${this.BDURL}/movies/${id}`, movie)
  }

  deleteMovie(id: string): Observable<Movie>{
    return this.http.delete<Movie>(`${this.BDURL}/movies/${id}`)
  }

}
