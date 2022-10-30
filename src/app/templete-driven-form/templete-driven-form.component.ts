import { post } from './../post.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent implements OnInit {
  onCreate(form: post) {
    this.http.post<{name:string}>('https://myangular-1d20e-default-rtdb.firebaseio.com/Personal.json', form)
    .subscribe(Response => {
      console.log(Response);
    });
    
  }
  loadedPost: post[] = [];
  onFetch(){
    this.http.get<{[key: string]:post}>('https://myangular-1d20e-default-rtdb.firebaseio.com/Personal.json')
     .pipe(map(ResponseData =>{
     const postArray: post[] = [];
     for(const key in ResponseData){
      if(ResponseData.hasOwnProperty(key)){
        postArray.push({...ResponseData[key], id:key})
      }
     }
     return postArray;
     }))
    .subscribe(res => {
      this.loadedPost = res;
    });
console.log(this.loadedPost)
  }

   onDelete()
   {
    this.http.delete('https://myangular-1d20e-default-rtdb.firebaseio.com/Personal.json')
    .subscribe();
   }
  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
  }

}
