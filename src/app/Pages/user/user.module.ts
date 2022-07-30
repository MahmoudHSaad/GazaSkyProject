import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserActionComponent } from './User-Actions/user-action/user-action.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    UserActionComponent,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
ReactiveFormsModule
  ],

})
export class UserModule { }
