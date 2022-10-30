import { AppServiceService } from './../common/services/app-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.css']
})
export class MockDataComponent implements OnInit {
  userData:any = [];  // common on both the case
  // add url herie
  // constructor(private http: HttpClient) { }

  // ngOnInit() {
  //   this.getUserDetaisl();
  // }

  // getUserDetaisl(){
  //   this.http.get(this.url).subscribe(res => this.userData = res);
  // }

  // new code with services 
  constructor(
    private appService: AppServiceService, 
    public router: ActivatedRoute){}

  ngOnInit() { 
    this.router.paramMap.subscribe(params => { 
      const id = params.get('id'); 
      console.log(id);  
      if (id) {
        this.getUserById(parseInt(id));
      }else{
        this.getUserData(); 
      }
    });
  }  
  getUserData(){
    this.appService.getUserDetails().subscribe(res => this.userData = res); 
  }
  delete(id:number){
    this.appService.deleteUser(id).subscribe(res => {
      this.userData = res;
      this.getUserData();
    }
    );
  }
    getUserById(id: number){
      this.appService.getUserById(id).subscribe(res => {
        this.userData = res; 
      });  
    }  
  
 
}
