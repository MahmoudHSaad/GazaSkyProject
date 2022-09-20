import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiUsersRoutingModule } from './api-users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiUsersComponent } from './api-users/api-users.component';
import { ApiUsersActionsComponent } from './api-users-actions/api-users-actions.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiUsersService } from './api-users.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserProfileComponent } from './user-profile/user-profile.component';

 
@NgModule({
  declarations: [
    ApiUsersComponent,
    ApiUsersActionsComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    ApiUsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   ApiUsersService
  ],
})
export class ApiUsersModule { }
