import { NgModule } from '@angular/core';
 
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersActionsComponent } from './UsersActions/users-actions/users-actions.component';

const routes: Routes= [
  {path:"Actions/edit/:id" , component:UsersActionsComponent},
  {path:"Actions/add" , component:UsersActionsComponent},
  {path:"mainPage" , component:UsersComponent},
  {path:'' , redirectTo:'/UsersAssignTow/mainPage' , pathMatch:"full"},

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersAssignTwoRoutingModule { }
