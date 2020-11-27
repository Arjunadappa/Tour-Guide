import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from "../httpservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as mapboxgl from 'mapbox-gl';
import * as AOS from 'aos';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userdetails;
  tour
  map: mapboxgl.Map;
  id;
  constructor(private router: Router, private route: ActivatedRoute,private httpService: HttpserviceService) { }

  ngOnInit(): void {
    AOS.init({
      once: true
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpService.getCurrentUser().subscribe(user => {
      this.userdetails = user;
      console.log(user);
    })
    this.httpService.getTour(this.route.snapshot.paramMap.get('id')).subscribe(tour => {
      this.tour = tour;
      console.log(tour);
      this.map = new mapboxgl.Map({
        container: 'map',
        accessToken:'pk.eyJ1IjoidHVzaGFyZGciLCJhIjoiY2toeDl6OHFqMjRmZTJycGJ5ZTh0ZnB6eiJ9.BTWJHE9O_pIK9Nm7b1o-fg',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 13,
        center: tour.data.data.startLocation.coordinates
      });
      let marker = new mapboxgl.Marker()
        .setLngLat(tour.data.data.startLocation.coordinates)
        .addTo(this.map);
      if(tour.data.data.locations.length > 0){
        tour.data.data.locations.forEach((location) => {
          let marker = new mapboxgl.Marker()
            .setLngLat(location.coordinates)
            .addTo(this.map);
        })
      }
    })
    //mapboxgl.accessToken = 'pk.eyJ1IjoidHVzaGFyZGciLCJhIjoiY2toeDl6OHFqMjRmZTJycGJ5ZTh0ZnB6eiJ9.BTWJHE9O_pIK9Nm7b1o-fg';

    let marker = new mapboxgl.Marker()
      .setLngLat([12.550343, 55.665957])
      .addTo(this.map);
  }
  logout() {
    this.httpService.logout().subscribe((data) => {
      console.log(data);
      this.userdetails = ''
      this.router.navigate(['login'])
    })
  }


}
