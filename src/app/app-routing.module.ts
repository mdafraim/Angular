import { MyComponentComponent } from './my-component/my-component.component';
import { PracticeHttpComponent } from './Practice-http/Practice-http.component';
import { DatabaseComponent } from './Database/Database.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MockDataComponent } from './mock-data/mock-data.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PracticalComponent } from './practical/practical.component';
import { TempComponent } from './temp/temp.component';
import { TestComponent } from './test/test.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'temp', component: TempComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'mock-data', component: MockDataComponent},
  {path: 'mock-data/:id', component: MockDataComponent},
  {path: 'practical', component: PracticalComponent},
  {path: 'templete-driven-form', component: TempleteDrivenFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'app-http-client', component: HttpClientComponent},
  {path: 'Database', component: DatabaseComponent},
  {path: 'Practice-http', component: PracticeHttpComponent},
  {path: 'my-component', component: MyComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
