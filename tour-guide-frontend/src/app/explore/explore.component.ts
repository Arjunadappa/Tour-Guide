import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from "../httpservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import { CommonModule } from "@angular/common";
import * as moment from 'moment';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  tours: any[];
  userdetails;
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
    this.httpService.getCurrentUser().subscribe(user => {
      this.userdetails = user;
      //console.log(user);
    })
  }

}
