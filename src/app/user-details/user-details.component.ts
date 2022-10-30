import { PersonService } from './../common/services/person.service';
import { important } from './../important.model';
import { HttpClient } from '@angular/common/http';
import { CricketService } from './../cricket.service';
import { AppServiceService } from './../common/services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  ManyOf: important[] = [];
  constructor(private appService: AppServiceService, private CricketService: CricketService, private http: HttpClient, private PersonService: PersonService){}
  
  Imp(important: {FirstName:string, LastName:string, Mobile:string}){
    this.http.post('https://myangular-1d20e-default-rtdb.firebaseio.com/important.json', important)
    .subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {

  }  

}
