import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from './../common/services/person.service';
import { CricketService } from './../cricket.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { cricket } from '../cricket.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
 constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
   } 

  login: FormGroup
  get username(){
    return this.login.get('username')
  }
  get password(){
    return this.login.get('password')
  }
  
}
