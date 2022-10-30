import { CricketService } from './cricket.service';
import { RouterModule } from '@angular/router';
import { AppServiceService } from './common/services/app-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';
import { HeaderComponent } from './header/header.component';
import { PracticalComponent } from './practical/practical.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { MockDataComponent } from './mock-data/mock-data.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DatabaseComponent } from './Database/Database.component';
import { PracticeHttpComponent } from './Practice-http/Practice-http.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [					
    AppComponent,
    TestComponent,
    TempComponent,
    HeaderComponent,
    PracticalComponent,
    TempleteDrivenFormComponent,
    ReactiveFormComponent,
    HttpClientComponent,
      MockDataComponent,
      UserDetailsComponent,
      DatabaseComponent,
      PracticeHttpComponent,
      MyComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [AppServiceService,CricketService
              
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
