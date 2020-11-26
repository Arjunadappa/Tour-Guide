import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from "../httpservice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userdetails;
  tour
  constructor(private router: Router, private route: ActivatedRoute,private httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.httpService.getCurrentUser().subscribe(user => {
      this.userdetails = user;
      console.log(user);
    })
    this.httpService.getTour(this.route.snapshot.paramMap.get('id')).subscribe(tour => {
      this.tour = tour;
      console.log(tour)
    })
  }
  logout() {
    this.httpService.logout().subscribe((data) => {
      console.log(data);
      this.userdetails = ''
      this.router.navigate(['login'])
    })
  }


}
