import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../../get-all-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList: any[] = [];
  imgBase: string = 'https://image.tmdb.org/t/p/original';
  pageNumbers: number[] = [];
  pageNumber: number = 0;
  constructor(private _GetAllDataService: GetAllDataService) { }
  ngOnInit(): void {
    this.getMovies(1);
    for (let x = 1; x <= 10; x++) {
      this.pageNumbers.push(x);
    }
    console.log(this.pageNumbers)
  }

  getMovies(pageNumber: number) {
    this.pageNumber = pageNumber
    if (this.pageNumber > 0) {

      this._GetAllDataService.getDataPaginated('movie', this.pageNumber).subscribe(
        data => {
          this.moviesList = data.results
        }
      )
    }
  }



}
