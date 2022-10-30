import { cityDetail } from './../../cityDetail.model';
import { personal } from './../../personal.model';
import { Ragister } from './../../Ragister.model';
import { person } from './../../person.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs';
import { __values } from 'tslib';

@Injectable({providedIn: "root"})
export class PersonService {
    constructor(private http: HttpClient){}
Add(person: {fname:string; lname:string; contact:string; id?:string}) {
    this.http.post('https://enter-ba6c5-default-rtdb.firebaseio.com/person.json', person)
    .subscribe(res => {
     console.log(res);
    });
}
Person(){
    return this.http.get('https://enter-ba6c5-default-rtdb.firebaseio.com/person.json')
     .pipe(map(resp => {
      const person = [];
      for(let key in resp) {
        if(resp.hasOwnProperty(key)){
          person.push({...resp[key], id:key})
        }
      }
      return person;
     }))
}
deletePerson(id:string){
    this.http.delete('https://enter-ba6c5-default-rtdb.firebaseio.com/person/'+id+'.json')
    .subscribe();
}
editPerson(id:string, value:person){
    this.http.put('https://enter-ba6c5-default-rtdb.firebaseio.com/person/'+id+'.json',value)
    .subscribe();
}

//Product Datatype Caoding Here Means Practical-http Page Caoding
Order(product: {pName:string; pPrice:string; pDetail:string}){
    this.http.post('https://enter-ba6c5-default-rtdb.firebaseio.com/product.json',product)
    .subscribe(product => {
      console.log(product);
    }); 
}
/*Updated(id:string, value:product){
    this.http.put('https://enter-ba6c5-default-rtdb.firebaseio.com/product/'+id+'.json',value)
    .subscribe();
}*/
// Ragisteratin Form coading here which is available on temp page
Ragister(Ragister: {Fname:string;Email:string;username:string;pass:string}){
    this.http.post('https://enter-ba6c5-default-rtdb.firebaseio.com/Ragister.json', Ragister)
    .subscribe(res => {
        console.log(res);
    });
}
//Coading for Get Or Feching The Data
onFetch(){
    return this.http.get('https://enter-ba6c5-default-rtdb.firebaseio.com/Ragister.json')
    .pipe(map(res => {
        const Ragister = [];
        for(let key in res){
            if(res.hasOwnProperty(key)){
                Ragister.push({...res[key], id:key})
            }
        }
        return Ragister;
    }));
}

//Caoding For Edit Or Updated The Data
onDisplay(id:string, value:Ragister){
    this.http.put('https://enter-ba6c5-default-rtdb.firebaseio.com/Ragister/'+id+'.json', value)
    .subscribe();
}

//here id myComponent form Coading
 submitCity(cityDetail: {cityName:string;cityCode:string;stateName:string;countryName:string}){
    this.http.post('https://enter-ba6c5-default-rtdb.firebaseio.com/cityDetail.json', cityDetail)
    .subscribe(res => {
        console.log(res);
    });
 }
 fetchDetail(){
    return this.http.get('https://enter-ba6c5-default-rtdb.firebaseio.com/cityDetail.json')
    .pipe(map(res => {
        const cityDetail = [];
        for(let key in res){
            if(res.hasOwnProperty(key)){
                cityDetail.push({...res[key], id:key})
            }
        }
        return cityDetail;
    }));   
 }
 onEditDetail(id:string, value:cityDetail){
    this.http.put('https://enter-ba6c5-default-rtdb.firebaseio.com/cityDetail/'+id+'.json',value)
    .subscribe();
 }
 onDeleteDetail(id:string){
    this.http.delete('https://enter-ba6c5-default-rtdb.firebaseio.com/cityDetail/'+id+'.json')
    .subscribe();
 }


 onProvideRank(Cricket:{teamName:string; teamRankt20:string; teamRank1Day:string; teamRankTest:string}){
    this.http.post('https://enter-ba6c5-default-rtdb.firebaseio.com/Cricket.json', Cricket)
    .subscribe(res => {
      console.log(res);
    });
  }
  onGiveRank(){
    return this.http.get('https://enter-ba6c5-default-rtdb.firebaseio.com/Cricket.json')
    .pipe(map(res => {
     const cricket = [];
     for(let key in res){
        if(res.hasOwnProperty(key)){
            cricket.push({...res[key], id:key})
        }
     }
     return cricket;
    }));
  }


  
}