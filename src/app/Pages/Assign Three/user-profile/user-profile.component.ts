import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiUsersService } from '../api-users.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  Id:any;
  userdata:any
  constructor(private activatedRoute: ActivatedRoute , private UsersService:ApiUsersService ,private toastr: ToastrService ) {
    let getMood = this.activatedRoute.snapshot.params;
    this.Id =  getMood['id'];
    this.UsersService.getUserById(getMood['id']).subscribe(res=>{
      this.toastr.success('Success', 'Get Users Data Done');
     this.userdata = res
      console.log(res);
      
 
   },(err)=>{
    this.toastr.error(' Error  !',err.statusText);
    console.log(err);
   }
   );
   }

  ngOnInit(): void {
  }

}
