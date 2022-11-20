import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAllDataService } from '../../get-all-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private _GetAllDataService:GetAllDataService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
  }
  imgBase:string='https://image.tmdb.org/t/p/original';
  currentId:number=0;
  mediaType:string='';
  mediaDetails:any={};

  getDetails(){
     this.currentId=this._ActivatedRoute.snapshot.params['id'];
     this.mediaType=this._ActivatedRoute.snapshot.params['mediaType'];
    this._GetAllDataService.getDetails(this.mediaType,this.currentId).subscribe(
      data=> {
        console.log(data);
        this.mediaDetails=data;
        console.log(this.mediaDetails);
      }
    )
  }




}
