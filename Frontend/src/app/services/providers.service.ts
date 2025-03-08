import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Provider {
  _id?: string;
  name: string;
  contact: string;
  phone: string;
  products: string[];
}

@Injectable({
  providedIn: 'root'
})

export class ProvidersService {
  private apiUrl = 'http://localhost:3000/providers'; // URL del backend

  constructor(private http: HttpClient) {}

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl);
  }

  getProvider(id: string): Observable<Provider> {
    return this.http.get<Provider>(`${this.apiUrl}/${id}`);
  }

  createProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.apiUrl, provider);
  }

  updateProvider(id: number, updateData: Partial<Provider>): Observable<Provider> {
    return this.http.put<Provider>(`${this.apiUrl}/${id}`, updateData);
  }

//   deleteProvider(id: string): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
    deleteProvider(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }


}
