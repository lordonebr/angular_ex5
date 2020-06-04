export class Movie {
  name: string;
  urlPoster: string;
  year: number;

  constructor(name: string, urlPoster: string, year: number) {
    this.name = name;
    this.urlPoster = urlPoster;
    this.year = year;
  }
}
