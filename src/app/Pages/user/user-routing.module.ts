import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserActionComponent } from './User-Actions/user-action/user-action.component';


const routes: Routes = [
  // {path:'' ,  component: dddd , children:[  ]}
  {path:"Actions/edit/:id" , component:UserActionComponent},
  {path:"Actions/add" , component:UserActionComponent},
  {path:"mainPage" , component:UserComponent},
  {path:'' , redirectTo:'/Users/mainPage' , pathMatch:"full"},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
