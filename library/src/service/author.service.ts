import { Injectable } from '@angular/core';
import { Author } from '../class/author';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private client: HttpClient) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  authorSubmit(author: Author) {
    return this.client.post(environment.authorSubmitEndpoint, JSON.stringify(author), this.httpOptions);
  }

  getAuthors() {
    return this.client.get(environment.authorSubmitEndpoint, this.httpOptions);
  }
}
