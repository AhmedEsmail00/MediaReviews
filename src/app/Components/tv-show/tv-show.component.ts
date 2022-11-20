import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../../get-all-data.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  TVList:any[]=[];
  imgBase:string='https://image.tmdb.org/t/p/original';

    constructor(private _GetAllDataService:GetAllDataService) { }


    getTV(){
      this._GetAllDataService.getData('tv').subscribe(
        data=>{
          this.TVList=data.results
        }
      )
    }


    ngOnInit(): void {
      this.getTV();
    }

}
