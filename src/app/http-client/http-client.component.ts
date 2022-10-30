import { posts } from './../posts.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  loadedPost: posts[] = [];
  BigData: any=[];
  onPost(postData: {title:string; comment:string}){
    this.http.post('https://myangular-1d20e-default-rtdb.firebaseio.com/posts.json',postData)
    .subscribe(ResponseData => {
      console.log(ResponseData);
    });
  }
  onLog(login: {username:string; password:string}) {
    this.http.post('https://myangular-1d20e-default-rtdb.firebaseio.com/login.json', login)
    .subscribe(Response => {
      console.log(Response);
    });
  }
  fetchData(){
    this.http.get('https://myangular-1d20e-default-rtdb.firebaseio.com/posts.json')
    .subscribe(Data => {
     console.log(Data);
    });
  }
  onTake(){
    this.http.get('https://myangular-1d20e-default-rtdb.firebaseio.com/login.json')
    .subscribe(take => {
      console.log(take);
    });
  }
  
  
  
  constructor(private http: HttpClient) {
   
  }
  onReceive() {
    this.http.get<{[key:string]: posts}>('https://enter-ba6c5-default-rtdb.firebaseio.com/posts/add.json')
    .pipe(map( ResponseData  => {
      const posts = [];
      for (const key in ResponseData){
        if(ResponseData.hasOwnProperty(key)){
          posts.push({ ...ResponseData[key], id:key })
        }
      }
      return posts;
    }))
    .subscribe(posts => {
      this.loadedPost = posts;
    });
  }
  
  

  ngOnInit(): void {
    this.onReceive();
  }
  onSend(posts) {
    this.http.post<{name: String}>('https://enter-ba6c5-default-rtdb.firebaseio.com/posts/add.json', posts)
    .subscribe(res => {
      console.log(res);
    });
  }
}
