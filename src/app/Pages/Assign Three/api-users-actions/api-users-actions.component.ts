import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiUsersService } from '../api-users.service';
 
@Component({
  selector: 'app-api-users-actions',
  templateUrl: './api-users-actions.component.html',
  styleUrls: ['./api-users-actions.component.css']
})
export class ApiUsersActionsComponent implements OnInit {
 
  mood:string="";
  title:string="";
  FormAddUsers: FormGroup;
  dataAsString:any;
  data:any;
  updatId:any;

  constructor(private activatedRoute: ActivatedRoute  , private UsersService:ApiUsersService,
    private Router:Router ,private toastr: ToastrService) {
    let getMood = this.activatedRoute.snapshot.params;
this.updatId =  getMood['id']
    console.log(getMood);
    

    this.FormAddUsers = new FormGroup({
 
      id: new FormControl(""),
      first_name: new FormControl("",[Validators.required]),
      last_name: new FormControl("",[Validators.required]),
      avatar: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required , Validators.email]),

    });
    switch (Object.keys(getMood).length) {
      case 0:
        this.mood="add";
        this.title="Add New User Data";
        break;
      case 1:
        this.mood="edit"
        this.title="Edit User Data";
 

      this.UsersService.getUserById(getMood['id']).subscribe(res=>{
        this.toastr.success('Success', 'Get Users Data Done');
        console.log(res);
        
        this.FormAddUsers.setValue(res);
     },(err)=>{
      this.toastr.error(' Error  !',err.statusText);
      console.log(err);
     }
     );
        break;
    }
   }

   get f() { return this.FormAddUsers.controls; }

   save(){
 
  
 
     switch (this.mood) {
       case "add":
        console.log();
        
   this.UsersService.createUsers(this.FormAddUsers.value).subscribe(res=>{
      this.toastr.success('Success', 'Create Users Done');
      this.Router.navigateByUrl("UsersAssignThree/mainPageApiUsers")
   },(err)=>{
    this.toastr.error(' Error  !',err.statusText);
    console.log(err);
   }
   );
 
         break;
       case "edit":
        this.UsersService.upDateUser(this.updatId  , this.FormAddUsers.value).subscribe(res=>{
          this.toastr.success('Success', 'Update Users Done');
          this.Router.navigateByUrl("UsersAssignThree/mainPageApiUsers")
       },(err)=>{
        this.toastr.error(' Error  !',err.statusText);
        console.log(err);
       });
 
         break;
     }
     
    }
  ngOnInit(): void {
  }

}
