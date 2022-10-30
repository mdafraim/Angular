import { NgForm } from '@angular/forms';
import { cityDetail } from './../cityDetail.model';
import { PersonService } from './../common/services/person.service';
import { HttpClient } from '@angular/common/http';
import { post } from './../post.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
 cityAndCountry: cityDetail[] = [];
 @ViewChild('cityDetail') form: NgForm;
 countryMode:boolean = false;
 curruntcityId:string;
  constructor(private http: HttpClient, private PersonService: PersonService) { }

  ngOnInit() {
    this.onFetchDetail()
  }
  onSubmitCity(cityDetail: {cityName:string;cityCode:string;stateName:string;countryName:string}){
    if(!this.countryMode)
    this.PersonService.submitCity(cityDetail)
    else
    this.PersonService.onEditDetail(this.curruntcityId, cityDetail)
  }
  onFetchDetail(){
  this.PersonService.fetchDetail()
  .subscribe(cityDetail => {
    this.cityAndCountry = cityDetail;
    console.log(cityDetail)
  })
  }
  editDetail(id:string){
    this.curruntcityId = id;
    let curruntName = this.cityAndCountry.find((p) => {return p.id ===id } )
    this.form.setValue({
      cityName:curruntName.cityName,
      cityCode:curruntName.cityCode,
      stateName:curruntName.stateName,
      countryName:curruntName.countryName
    });
   this.countryMode = true;    
  }
  deleteDetail(id:string){
    this.PersonService.onDeleteDetail(id)
  }
}
