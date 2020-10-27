import { Component } from '@angular/core';
import {HttpserviceService} from "./httpservice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userdetails;
  constructor(private router: Router, private route: ActivatedRoute,private httpService: HttpserviceService){
    httpService.changeEmitted$.subscribe((data) => {
      if(data === true){
        this.httpService.getCurrentUser().subscribe(user => {
          this.userdetails = user;
          console.log(user);
        })
      }
    })
  }
  ngOnInit() {
    this.httpService.getCurrentUser().subscribe(user => {
      this.userdetails = user;
      console.log(user);
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
