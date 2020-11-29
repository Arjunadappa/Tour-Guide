import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    ,withCredentials:true
  };
  httpFormOptions = {
    headers: new HttpHeaders({
      'Content-Type':  "application/x-www-form-urlencoded"
    })
    ,withCredentials:true

  };
  createUser(data) : Observable<any>{
    return this.http.post('https://adventours--app.herokuapp.com/api/v1/users/signup',data,this.httpOptions)
  }
  login(data) : Observable<any>{
    return this.http.post('https://adventours--app.herokuapp.com/api/v1/users/login',data,this.httpFormOptions)
  }
  getCurrentUser() : Observable<any>{
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const header = new HttpHeaders({ 'Authorization': `Bearer ${jwt}` });
    const options = {
      headers: header,
      withCredentials:true
   };
    return this.http.get('https://adventours--app.herokuapp.com/api/v1/users/me',options);
  }
  logout() : Observable<any>{
    localStorage.removeItem('jwt');
    return this.http.get('https://adventours--app.herokuapp.com/api/v1/users/logout',{withCredentials:true})
  }
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
  getTours() : Observable<any>{
    return this.http.get('https://adventours--app.herokuapp.com/api/v1/tours',{withCredentials:true})
  }
  getTour(id) : Observable<any>{
    return this.http.get(`https://adventours--app.herokuapp.com/api/v1/tours/${id}`,{withCredentials:true})
  }
  updateUser(data): Observable<any>{
    console.log(data)
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const header = new HttpHeaders({ 'Authorization': `Bearer ${jwt}` });
    const options = {
      headers: header,
      withCredentials:true
   };
    return this.http.patch('https://adventours--app.herokuapp.com/api/v1/users/updateMe',data,options)
  }
  updatePassword(data): Observable<any>{
    
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const header = new HttpHeaders({ 'Authorization': `Bearer ${jwt}` });
    const options = {
      headers: header,
      withCredentials:true
   };
    return this.http.patch('https://adventours--app.herokuapp.com/api/v1/users/updateMyPassword',data,options)
  }

  getBookingSession(id):Observable<any>{
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const header = new HttpHeaders({ 'Authorization': `Bearer ${jwt}` });
    const options = {
      headers: header,
      withCredentials:true
   };
   return this.http.get(`https://adventours--app.herokuapp.com/api/v1/bookings/checkout-session/${id}`,options)
  }

  getBookings():Observable<any>{
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const header = new HttpHeaders({ 'Authorization': `Bearer ${jwt}` });
    const options = {
      headers: header,
      withCredentials:true
   };
   return this.http.get(`https://adventours--app.herokuapp.com/api/v1/bookings/my-tours`,options)
  }

}
