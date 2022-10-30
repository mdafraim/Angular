import { personal } from './../personal.model';
import { PersonService } from './../common/services/person.service';
import { HttpClient } from '@angular/common/http';
import { UsernameValidator } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  [x: string]: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  persnal = new FormGroup({
      username: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      UsernameValidator.usernameCannotContainspace
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      UsernameValidator.AAA
    ]),
  });
  get username(){
    return this.persnal.get('username');
  }
  get password(){
    return this.persnal.get('password');
  }
 
}