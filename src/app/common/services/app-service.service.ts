import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  url: string ='https://jsonplaceholder.typicode.com/users';
constructor(private http: HttpClient) { }
// get all user details
getUserDetails(){ 
  return this.http.get(this.url).pipe(retry(1));
}
//there is no api for now
deleteUser(id: number){ 
    return this.http.get(this.url+'/'+id).pipe(retry(1)); 
}
// to get singler suser by id 
getUserById(id: number){ 
  return this.http.get(this.url+'/'+id).pipe(retry(1)); 
}

}
