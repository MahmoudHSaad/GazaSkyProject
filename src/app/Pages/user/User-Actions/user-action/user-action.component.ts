import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent implements OnInit {
   mood:string="";
   title:string="";
   FormAddUsers: FormGroup;
   dataAsString:any;
   dataSource:Array<User>=[];
  constructor(  private activatedRoute: ActivatedRoute,) {
    let getMood = this.activatedRoute.snapshot.params;
    
  switch (Object.keys(getMood).length) {
  case 0:
    this.mood="add";
    this.title="Add New User Data";
    break;
  case 1:
    this.mood="edit"
    this.title="Edit User Data";
    break;
}
this.FormAddUsers = new FormGroup({
  id: new FormControl(""),
  firstname: new FormControl(""),
  lastname: new FormControl(""),
  email: new FormControl(""),
  address: new FormControl(""),
  birthdate: new FormControl(""),
  phone: new FormControl(""),
});

this.dataAsString = localStorage.getItem("data");
this.dataSource = JSON.parse(this.dataAsString);
console.log(this.dataSource.length );

   }
   
   save(){

    console.log(this.FormAddUsers.value);
    
   }


   
  ngOnInit(): void {
  }

}
