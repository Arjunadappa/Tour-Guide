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
    return this.http.post('https://ancient-castle-63110.herokuapp.com/api/v1/users/signup',data,this.httpOptions)
  }
  login(data) : Observable<any>{
    return this.http.post('https://ancient-castle-63110.herokuapp.com/api/v1/users/login',data,this.httpFormOptions)
  }
  getCurrentUser() : Observable<any>{
    return this.http.get('https://ancient-castle-63110.herokuapp.com/api/v1/users/me',{withCredentials:true})
  }
  logout() : Observable<any>{
    return this.http.get('https://ancient-castle-63110.herokuapp.com/api/v1/users/logout',{withCredentials:true})
  }
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
  getTours() : Observable<any>{
    return this.http.get('https://ancient-castle-63110.herokuapp.com/api/v1/tours',{withCredentials:true})
  }
  getTour(id) : Observable<any>{
    return this.http.get(`https://ancient-castle-63110.herokuapp.com/api/v1/tours/${id}`,{withCredentials:true})
  }
  updateUser(data): Observable<any>{
    console.log(data)
    return this.http.patch('https://ancient-castle-63110.herokuapp.com/api/v1/users/updateMe',data,{withCredentials:true})
  }
  updatePassword(data): Observable<any>{
    console.log(data);
    return this.http.patch('https://ancient-castle-63110.herokuapp.com/api/v1/users/updateMyPassword',data,{withCredentials:true})
  }

}
