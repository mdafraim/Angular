import { Ragister } from './../Ragister.model';
import { NgForm } from '@angular/forms';
import { PersonService } from './../common/services/person.service';
import { person } from './../person.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
loader: Ragister[] = [];
editUpdateMode:boolean = false;
@ViewChild('Ragister') form: NgForm;
curruntRagisterId:string;
constructor(private http: HttpClient, private PersonService: PersonService){}
ngOnInit(): void {this.Feching()}
//form Ragister Button Here
onRagister(Ragister: {Fname:string;Email:string;username:string;pass:string}){
  if(!this.editUpdateMode)
  this.PersonService.Ragister(Ragister);
  else
  this.PersonService.onDisplay(this.curruntRagisterId,Ragister)
}
//Coading For Get Or Display Information Coading
Feching(){
  this.PersonService.onFetch()
  .subscribe(Ragister => {
    this.loader = Ragister;
    //console.log(ragister);
  })
}

//Coading For Edit Or Upadte data in our Database using http request
Display(id:string){
  this.curruntRagisterId = id;
  let curruntdisplay = this.loader.find((p) => {return p.id === id})
  this.form.setValue({
    Fname: curruntdisplay.Fname,
    Email: curruntdisplay.Email,
    username: curruntdisplay.username
  })  
  //console.log(this.form)
this.editUpdateMode = true;  
}

//Here is Delete method perform
onDeleted(id:string){
  this.http.delete('https://enter-ba6c5-default-rtdb.firebaseio.com/Ragister/'+id+'.json')
  .subscribe();
}
}
