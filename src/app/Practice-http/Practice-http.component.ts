import { PersonService } from './../common/services/person.service';
import { NgForm } from '@angular/forms';
import { sensetive } from './../sensetive';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-Practice-http',
  templateUrl: './Practice-http.component.html',
  styleUrls: ['./Practice-http.component.css']
})
export class PracticeHttpComponent implements OnInit {
  UpdateMode:boolean = false;
  @ViewChild('product') form: NgForm;
  curruntPersonId:string;
  onLoad: sensetive[] = [];
 
 
  onOrder(product: {pName:string; pPrice:string; pDetail:string}){
    if(!this.UpdateMode)
    this.PersonService.Order(product) 
    
    //this.PersonService.Updated(this.curruntPersonId,product)
  }
  onReceive(){
    this.http.get('https://enter-ba6c5-default-rtdb.firebaseio.com/product.json')
    .pipe(map( responseData => {
      const sensetive = [];
      for(let key in responseData){
        if(responseData.hasOwnProperty(key)){
          sensetive.push({...responseData[key], id:key})
        }
      }
      return sensetive;
    }))
    .subscribe( sensetive => {
      this.onLoad = sensetive;
      console.log(sensetive);
    });
  }
  onDeleteProduct(id:string){
    this.http.delete('https://enter-ba6c5-default-rtdb.firebaseio.com/product/'+id+'.json')
      .subscribe();
  }
  //All Clear table
  onClear(){
    this.http.delete('https://enter-ba6c5-default-rtdb.firebaseio.com/product.json')
    .subscribe();
  }

  //Edit Coading 
  onUpdate(id:string){
    this.curruntPersonId = id
    let curruntProduct = this.onLoad.find((p) => {return p.id ===id })
    this.form.setValue({
      pName:curruntProduct.pName,
      pDetail:curruntProduct.pDetail,
      pPrice:curruntProduct.pPrice
    });
    this.UpdateMode = true;
  }

constructor(private http: HttpClient, private PersonService: PersonService) { }

  ngOnInit() {
    this.onReceive()
  }
    

}

