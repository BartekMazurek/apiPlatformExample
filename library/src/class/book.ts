import { BookInterface } from '../interface/book.interface';

export class Book implements BookInterface {
  constructor(public title: string, public author: string, public releaseDate: string, public description: string) {
  }
}
