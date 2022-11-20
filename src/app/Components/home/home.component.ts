import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../../get-all-data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _GetAllDataService: GetAllDataService, private spinner: NgxSpinnerService) { }

  moviesList: any[] = [];
  TVList: any[] = [];
  amount: number = 24546433;
  searchValue: string = '';
  overView: boolean = false;
  overViewValue: string = '';
  imgBase: string = 'https://image.tmdb.org/t/p/original';

  showMore(myEvent: any) {
    if (this.overView == false) {
      this.overView = true;
      this.overViewValue = myEvent.innerHTML;
      console.log(myEvent.innerHTML);
    }
    else {
      this.overView = false
      this.overViewValue = myEvent.innerHTML;

    }
  }

  getMovies() {
    this.spinner.show();
    this._GetAllDataService.getData('movie').subscribe(
      data => {
        this.moviesList = data.results
      },
      () => console.log,

      () => this.spinner.hide()
    )
    // this.spinner.hide();
  }

  getTV() {
    this._GetAllDataService.getData('tv').subscribe(
      data => {
        this.TVList = data.results
      }
    )
  }







  ngOnInit(): void {
    this.getMovies();
    this.getTV();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    margin: 20,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
}




