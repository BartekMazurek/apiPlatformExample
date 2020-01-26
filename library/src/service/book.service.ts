import { Injectable } from '@angular/core';
import { Book } from '../class/book';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private client: HttpClient) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  bookSubmit(book: Book) {
    return this.client.post(environment.bookSubmitEndpoint, JSON.stringify(book), this.httpOptions);
  }

  getBookList() {
    return this.client.get(environment.bookSubmitEndpoint, this.httpOptions);
  }

  removeBook(bookId: bigint) {
    return this.client.delete(environment.bookSubmitEndpoint + '/' + bookId, this.httpOptions);
  }
}
