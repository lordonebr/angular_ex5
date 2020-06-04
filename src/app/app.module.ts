import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component/app.component";
import { Movie } from "./movie.component/movie.component";
import { ListMovie } from "./list-movie.component/list-movie.component";
import { Filter } from "./filter.component/filter.component";
import { ListLength } from "./list-length.component/list-length.component";
import { HeaderTitle } from "./header-title.component/header-title.component";

@NgModule({
  declarations: [
    AppComponent,
    Movie,
    ListMovie,
    Filter,
    ListLength,
    HeaderTitle
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
