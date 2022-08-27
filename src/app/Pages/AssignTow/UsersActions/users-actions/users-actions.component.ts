import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../users.model';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.css']
})
export class UsersActionsComponent implements OnInit {
 
  mood:string="";
  title:string="";
  FormAddUsers: FormGroup;
  dataAsString:any;
data:any;
  constructor(private activatedRoute: ActivatedRoute , private UsersService:UsersService ,
    private Router:Router) {
    let getMood = this.activatedRoute.snapshot.params;

    this.FormAddUsers = new FormGroup({
 
      id: new FormControl(""),
      name: new FormControl("",[Validators.required , Validators.minLength(5)]),
      description: new FormControl("",[Validators.required , Validators.minLength(50)]),
 
    });
    switch (Object.keys(getMood).length) {
      case 0:
        this.mood="add";
        this.title="Add New User Data";
        break;
      case 1:
        this.mood="edit"
        this.title="Edit User Data";
       this.data =  this.UsersService.getUserById(getMood['id']); 

       this.FormAddUsers.setValue( this.data);

        break;
    }

   }

   get f() { return this.FormAddUsers.controls; }

  save(){

 

    switch (this.mood) {
      case "add":
  this.UsersService.addUser(this.FormAddUsers.value);
  this.Router.navigateByUrl("UsersAssignTow/mainPage")
        break;
      case "edit":
  this.UsersService.editUser(this.FormAddUsers.value);
  this.Router.navigateByUrl("UsersAssignTow/mainPage")
        break;
    }
    
   }

  ngOnInit(): void {

  }

}
