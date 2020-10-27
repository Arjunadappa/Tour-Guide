import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcookieService {
  getCookie(){
    let cookie_array = document.cookie.split(';');
    console.log(cookie_array);
    for(let i = 0; i < cookie_array.length;i++){
      let cookiePair = cookie_array[i].split('=');
      if ('jwt' === cookiePair[0].trim()){
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null
  }
}
