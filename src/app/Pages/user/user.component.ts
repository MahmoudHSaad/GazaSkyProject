import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

dataSource:Array<User> =[];
dataSourceCopy:Array<User> =[];
title ="Users Data Table"
FormAddUsers: FormGroup;
mood:string="";
titleMood:string="";
getUserForEdit:any;
dataAsString:any;
firstTime:boolean=true
  constructor() {
  let x:any =localStorage.getItem('data')
console.log(localStorage.getItem('data'));


  this.dataSource =[
    {
      id:1,
      address:"Palestine - Gaza ",
      birthdate:"20/07/1995",
      email:"mahmoud33saad@gmail.com",
      firstname :"Mahmoud",
      lastname : "Saad",
      phone : "0595394370",  
    }
  ]   
    if(localStorage.getItem('data')?.length == 2 && this.firstTime){
      localStorage.setItem("data",JSON.stringify(this.dataSource))
      this.firstTime = false
    }
switch (localStorage.getItem('data')) {
  case null:
      localStorage.setItem("data",JSON.stringify(this.dataSource))
    break;

  default:
    this.dataAsString = localStorage.getItem("data");
    this.dataSource = JSON.parse(this.dataAsString);
    break;
}


    this.dataSourceCopy = [...this.dataSource];

    this.FormAddUsers = new FormGroup({
      id: new FormControl(""),
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),
      birthdate: new FormControl(""),
      phone: new FormControl(""),
    });


   }
   editMood(id:number){
    console.log(id);
    
    this.mood = "edit"
    this.titleMood="Edit User Data";

    this.getUserForEdit= this.dataSourceCopy.find(obj => obj.id === id);
    this.FormAddUsers.setValue(this.getUserForEdit);

   }

   addMood(){
    this.FormAddUsers.reset()
    this.mood = "add"
    this.titleMood="Add New User Data";
   }

   save(){

    switch (this.mood) {
      case "add":
        let id =this.dataSourceCopy.length + 1;
        if(this.dataSourceCopy.length == null){
          id= 1
        }
        this.FormAddUsers.patchValue({
          id:id
        })
        this.dataSourceCopy.push(this.FormAddUsers.value);

        
        localStorage.setItem("data",JSON.stringify(this.dataSourceCopy));
        this.FormAddUsers.reset()
    
        break;
      case "edit":
        var foundIndex = this.dataSourceCopy.findIndex(x => x.id == this.getUserForEdit.id);
        this.dataSourceCopy[foundIndex] =this.FormAddUsers.value;
        localStorage.setItem("data",JSON.stringify(this.dataSourceCopy));
    
        break;

    }

    

   }
   deleteItem(id:number){

  this.dataSourceCopy = this.dataSourceCopy.filter(t => {

    return t.id !== id;
   });
   localStorage.setItem("data",JSON.stringify(this.dataSourceCopy));
  }

  ngOnInit(): void {
    console.log("in");
    
  }
}
