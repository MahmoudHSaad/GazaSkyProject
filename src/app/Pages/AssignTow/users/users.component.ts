import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  dataSourceCopy:any=[];
  title ="Users Data Table";

  constructor(private UserService : UsersService) {
   this.getAllUsers() 
   }


  getAllUsers(){
  this.dataSourceCopy =this.UserService.getUsers() 
  }
  deleteItem(x:number){

    this.dataSourceCopy=  this.UserService.deleteUser(x);
    this.getAllUsers() 
  }
  editMood(){}
  ngOnInit(): void {

  }

}
