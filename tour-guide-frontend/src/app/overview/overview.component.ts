import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpserviceService} from "../httpservice.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tours;
  userdetails;
  constructor(private router: Router, private route: ActivatedRoute,private httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.httpService.getTours().subscribe((data) => {
      this.tours = data;
      console.log(data)
    })
    this.httpService.getCurrentUser().subscribe(user => {
      this.userdetails = user;
      //console.log(user);
    })
  }

}
