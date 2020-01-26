import { Component, OnInit} from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../class/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit{

  private isSubmitted: boolean;
  private submittedStatus: boolean;
  private submittedMessage: string;

  private firstnameValue: string;
  private lastnameValue: string;
  private descriptionValue: string;

  private authorService: AuthorService;

  constructor(private author: AuthorService) {
    this.authorService = author;
  }

  authorSubmit(authorForm) {
    this.isSubmitted = true;
    this.submittedStatus = false;
    const newAuthor = new Author(authorForm[0].value, authorForm[1].value, authorForm[2].value);
    this.authorService.authorSubmit(newAuthor).subscribe(result => {
      this.submitSuccess();
    }, error => {
      this.submitError();
    });
  }

  ngOnInit() {
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
    this.firstnameValue = '';
    this.lastnameValue = '';
    this.descriptionValue = '';
    setTimeout(() => {
      this.submittedStatus = false;
      this.isSubmitted = false;
    }, 3000);
  }
}
