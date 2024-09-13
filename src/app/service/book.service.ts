import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://localhost:7270/api/BooksSearch'; // Backend API

  constructor(private http: HttpClient) {}

  searchBooks(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?title=${title}`);
  }
}