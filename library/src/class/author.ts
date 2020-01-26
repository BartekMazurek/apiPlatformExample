import { Optional } from '@angular/core';
import { AuthorInterface } from '../interface/author.interface';

export class Author implements AuthorInterface {

  constructor(public firstname: string, public  lastname: string, public description: string) {
  }
}
