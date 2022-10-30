import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Database',
  templateUrl: './Database.component.html',
  styleUrls: ['./Database.component.css']
})
export class DatabaseComponent implements OnInit {
  onData: any = [];
  
  onDelete(onData:any) {
    this.http.delete('https://jsonplaceholder.typicode.com/users/' + '/' + onData.id)
    .subscribe( res => {
      let index = this.onData.indexOf(onData);
      this.onData.splice(index, 1);
    })
  }
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.Data()
    
  }
  Data(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(res => {
      this.onData = res;
    });
    

  }
}
