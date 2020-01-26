import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private bookList: Array<object>;

  private bookService: BookService;

  constructor(private service: BookService) {
    this.bookService = service;
    this.bookService.getBookList().subscribe(result => {
      this.setList(result);
    });
  }

  ngOnInit() {
  }

  refreshList() {
    this.bookService.getBookList().subscribe(result => {
      this.setList(result);
    });
  }

  setList(list) {
    this.bookList = list;
  }

  removeBook(bookId: bigint) {
    this.bookService.removeBook(bookId).subscribe(result => {
      this.refreshList();
    });
  }
}
