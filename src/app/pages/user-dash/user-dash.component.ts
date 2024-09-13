import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-user-dash',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.css'
})
export class UserDashComponent {
 
    searchTitle: string='';
    books: any[] = [];
  
    constructor(private bookService: BookService) {}
  
    searchBooks() {
      this.bookService.searchBooks(this.searchTitle).subscribe((data) => {
        this.books = data;
      });
    }
  }


