import { PersonService } from './../common/services/person.service';
import { person } from './../person.model';
//import { person } from 'src/person.model';
import { NgForm } from '@angular/forms';
import { details } from '../../details.model';
import { emp } from './../emp.model';
import { HttpClient } from '@angular/common/http';
import { Component, importProvidersFrom, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';



@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.css']
})
export class PracticalComponent implements OnInit {
  empLoad: emp[] = [];
  ondetail: details[] = [];
  onMan: person[] = [];
  //below coding Edit
  editMode: boolean = false;
  @ViewChild('person') form: NgForm;    //This is also Edit Code
  curruntpersonId:string;        //This Also edit Method
  sendEmpDetails(sendEmpDetails){
     this.http.post('https://enter-ba6c5-default-rtdb.firebaseio.com/sendEmpDetails.json', sendEmpDetails)
     .subscribe(res => {
      console.log(res);
     });
  }
  onEmpDetailReceive(){
    this.http.get('https://enter-ba6c5-default-rtdb.firebaseio.com/sendEmpDetails.json')
    .pipe(map(ResponseData => {
      const emp = [];
      for(let key in ResponseData){
        if(ResponseData.hasOwnProperty(key)){
          emp.push({...ResponseData[key], id:key})
        }
      }
      return emp;
    }))
    .subscribe(emp =>{
      this.empLoad = emp;
      console.log(emp);
    })
  }
   empOnDelete(id:string){
   this.PersonService.deletePerson(id)
   }  
   onAdd(person){
    if(!this.editMode)
     this.PersonService.Add(person);
     else
     this.PersonService.editPerson(this.curruntpersonId,person);
   }
   onPerson(){
    this.PersonService.Person()
    .subscribe((person) => {
      this.onMan = person
      console.log(person);
    })
   }
   onPersonDelete(id:string){
    this.PersonService.deletePerson(id)
   }
   //Edit Button Coading 
    onEdit(id:string){
   this.curruntpersonId = id;
   let curruntperson = this.onMan.find((p) => {return p.id === id})
   this.form.setValue({
    fname: curruntperson.fname,
    lname: curruntperson.lname,
    contact: curruntperson.contact
   });
   this.editMode = true;
   }
   //Here is End Edit Coading
  constructor(private http: HttpClient, private PersonService: PersonService) {}

  ngOnInit(): void {
    this.onEmpDetailReceive()
    this.onPerson()
    
    
  }

}
