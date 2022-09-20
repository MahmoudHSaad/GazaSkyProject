import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../AssignTow/users/users.component';
import { ApiUsersActionsComponent } from './api-users-actions/api-users-actions.component';
import { ApiUsersComponent } from './api-users/api-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
 
  {path:"Actions/add", component:ApiUsersActionsComponent},
  {path:"Actions/edit/:id", component:ApiUsersActionsComponent},
  {path:"mainPageApiUsers", component:ApiUsersComponent},
  {path:"userProfile/:id", component:UserProfileComponent},
  {path:'', redirectTo:'/UsersAssignThree/mainPageApiUsers' , pathMatch:"full"}

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiUsersRoutingModule { }
