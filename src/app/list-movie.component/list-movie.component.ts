import { Component, Input } from "@angular/core";
import { Movie } from "../movie.model";

@Component({
  selector: "list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.css"]
})
export class ListMovie {
  @Input() filter: string;
  listMovies: Movie[];
  movies: Movie[];

  ngOnInit() {
    this.listMovies = [];
    this.listMovies.push(
      new Movie(
        "Homem de Ferro",
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2008
      )
    );
    this.listMovies.push(
      new Movie(
        "O Incrível Hulk",
        "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2008
      )
    );
    this.listMovies.push(
      new Movie(
        "Homem de Ferro 2",
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
        2010
      )
    );
    this.listMovies.push(
      new Movie(
        "Thor",
        "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2011
      )
    );
    this.listMovies.push(
      new Movie(
        "Capitão América: O Primeiro Vingador",
        "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
        2011
      )
    );
    this.listMovies.push(
      new Movie(
        "Os Vingadores",
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        2012
      )
    );
    this.listMovies.push(
      new Movie(
        "Homem de Ferro 3",
        "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg",
        2013
      )
    );
    this.listMovies.push(
      new Movie(
        "Thor 2: O Mundo Sombrio",
        "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SY1000_SX700_AL_.jpg",
        2013
      )
    );
    this.listMovies.push(
      new Movie(
        "Capitão América 2: O Soldado Invernal",
        "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SY1000_CR0,0,685,1000_AL_.jpg",
        2014
      )
    );
    this.listMovies.push(
      new Movie(
        "Guardiões da Galáxia",
        "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2014
      )
    );
    this.listMovies.push(
      new Movie(
        "Vingadores: Era de Ultron",
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_SX675_AL_.jpg",
        2015
      )
    );
    this.listMovies.push(
      new Movie(
        "Homem Formiga",
        "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg",
        2015
      )
    );
    this.listMovies.push(
      new Movie(
        "Capitão América 3: Guerra Civil",
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2016
      )
    );
    this.listMovies.push(
      new Movie(
        "Doutor Estranho",
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2016
      )
    );
    this.listMovies.push(
      new Movie(
        "Guardiões da Galáxia 2",
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_.jpg",
        2017
      )
    );
    this.listMovies.push(
      new Movie(
        "Homem Aranha: De Volta ao Lar",
        "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SY1000_CR0,0,658,1000_AL_.jpg",
        2017
      )
    );
    this.listMovies.push(
      new Movie(
        "Thor 3: Ragnarok",
        "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2017
      )
    );
    this.listMovies.push(
      new Movie(
        "Pantera Negra",
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2018
      )
    );
    this.listMovies.push(
      new Movie(
        "Vingadores: Guerra Infinita",
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2018
      )
    );
    this.listMovies.push(
      new Movie(
        "Homem Formiga e Vespa",
        "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        2018
      )
    );
    this.listMovies.push(
      new Movie(
        "Capitã Marvel",
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        2019
      )
    );
    this.listMovies.push(
      new Movie(
        "Vingadores: Ultimato",
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        2019
      )
    );

    this.movies = this.listMovies;
  }

  ngOnChanges() {
    if (this.listMovies) {
      this.movies = this.listMovies.filter(
        movie => movie.name.toLowerCase().search(this.filter.toLowerCase()) >= 0
      );
    }
  }
}
