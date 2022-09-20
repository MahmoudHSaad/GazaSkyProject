import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from '../api-users.service';
import { ToastrService } from 'ngx-toastr';
import { from, mergeMap, Observable } from 'rxjs';
@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.css']
})
export class ApiUsersComponent implements OnInit {
  dataSourceCopy:any=[];
  dataSourceCopyKeys:any=[];
  title ="Users Data Table";
  deletingDone=true;
  checkboxClickId:any=[]
  obs:any;
  disabled = true
 
  constructor(private ApiService:ApiUsersService,private ToastrService:ToastrService) { 
    this.getAllUsers() 
  }
  getAllUsers(){
    this.ApiService.getUsers().subscribe(res=>{
   
      this.dataSourceCopy = Object.values(res);
      this.dataSourceCopyKeys = Object.keys(res);
      this.ToastrService.success('Success', 'Data Loading Done');
    },(err=>{
      this.ToastrService.error('Error',err.statusText  );
    })
    );
    }
    deleteItem(x:number){



      this.ApiService.deleteUser(this.dataSourceCopyKeys[x]).subscribe(res=>{
   
        this.  dataSourceCopy=[];
        this.dataSourceCopyKeys=[];
        this.getAllUsers() ;
        this.ToastrService.success('Success', ' Deleting User Done    ');
      },(err=>{
        this.ToastrService.error('Error',err.statusText  );
      })
      );
      
  
    }
    checkboxClick(x:any,event:any){
     let id:any = this.dataSourceCopyKeys[x];
     let checked:boolean= event.currentTarget.checked;
this.disabled=false
     if(!this.checkboxClickId.includes(id) &&checked){
      this.checkboxClickId.push(id);
      this.obs = from(this.checkboxClickId);
 
     }
     if(this.checkboxClickId.includes(id) && !checked){
  this.checkboxClickId =   this.checkboxClickId.filter(function(item:any) {
    return item !== id
      })
      this.obs = from(this.checkboxClickId);
 
      if(this.checkboxClickId.length == 0){
        this.disabled = false
      } 

     }
     
  
    }

    DeletingAll(){
      this.obs.pipe(
        mergeMap((value:any)=>{
          return this.ApiService.deleteUser(value);
        })
      ).subscribe((res:any) =>{
   
        this.  dataSourceCopy=[];
        this.dataSourceCopyKeys=[];
        this.getAllUsers() ;
        this.ToastrService.success('Success', ' Selected Users are Deleting    ');
      },((err:any)=>{
        this.ToastrService.error('Error',err.statusText  );
      })
      );
    }

 
  ngOnInit(): void {
  }

}
