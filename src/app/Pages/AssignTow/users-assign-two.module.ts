import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersActionsComponent } from './UsersActions/users-actions/users-actions.component';
import { UsersAssignTwoRoutingModule } from './users-assign-two-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UsersActionsComponent
  ],
  imports: [
    CommonModule,
    UsersAssignTwoRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersAssignTwoModule { }
