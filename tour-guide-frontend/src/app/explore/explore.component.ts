import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from "../httpservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  tours: any[];
  constructor(private httpService:HttpserviceService,private router: Router, private route: ActivatedRoute) { }

  getMonth_Year(date){
    let d = moment(date);
    return d.format('MMM YYYY')
  }

  ngOnInit(): void {
    this.httpService.getTours().subscribe((results) => {
      this.tours = results.data.data;
      console.log(this.tours)
    })
  }

}
