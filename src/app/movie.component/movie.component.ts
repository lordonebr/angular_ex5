import { Component, Input } from "@angular/core";

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class Movie {
  @Input() name: string;
  @Input() urlPoster: string;
  @Input() year: number;
}
