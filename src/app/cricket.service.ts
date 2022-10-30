import { important } from './important.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cricket } from './cricket.model';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  constructor(private http: HttpClient) { }
  /*omImp(important: {FirstName:string, LastName:string, Mobile:string}){
    this.http.post('https://myangular-1d20e-default-rtdb.firebaseio.com/important.json', important)
    .subscribe(res => {
      console.log(res);
    });
  }*/
}
