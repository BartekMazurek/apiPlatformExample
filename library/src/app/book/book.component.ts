import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { AuthorService } from '../../service/author.service';
import { Book } from '../../class/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private isSubmitted: boolean;
  private submittedStatus: boolean;
  private submittedMessage: string;

  private titleValue: string;
  private releaseValue: string;
  private descriptionValue: string;

  private authors: any;
  private bookService: BookService;

  constructor(private book: BookService, private author: AuthorService) {
    this.bookService = book;
    this.getAuthors();
  }

  bookSubmit(bookForm) {
      this.isSubmitted = true;
      const newBook = new Book(bookForm[0].value, '/api/authors/' + bookForm[1].value, bookForm[2].value, bookForm[3].value);
      this.bookService.bookSubmit(newBook).subscribe(result => {
        this.submitSuccess();
      }, error => {
        this.submitError();
      });
  }

  ngOnInit() {
  }

  getAuthors() {
    this.author.getAuthors().subscribe(result => {
      this.authors = result;
    });
  }

  submitSuccess() {
    this.submittedStatus = true;
    this.submittedMessage = 'success';
    this.clearForm();
  }

  submitError() {
    this.submittedStatus = true;
    this.submittedMessage = 'error';
    this.clearForm();
  }

  clearForm() {
    this.titleValue = '';
    this.releaseValue = '';
    this.descriptionValue = '';
    setTimeout(() => {
      this.submittedStatus = false;
      this.isSubmitted = false;
    }, 3000);
  }
}
