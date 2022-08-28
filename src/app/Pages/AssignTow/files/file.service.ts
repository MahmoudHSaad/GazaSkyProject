import { Injectable } from '@angular/core';
import { Files } from './files.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  dataSource:Array<Files> =[];  

  constructor() { 
    this.dataSource =[
      {

        id:1,
        name:"Css ",
        description:"start learn css from zero to prof",
      
      },
      {

        id:2,
        name:"HTML ",
        description:"start learn html from zero to prof",
      
      },
      {

        id:3,
        name:"Java ",
        description:"start learn java from zero to prof",
      
      },
      {

        id:4,
        name:"Angular ",
        description:"start learn angular from zero to prof",
      
      }
    ] 
  }

  getAllFile(){
    return this.dataSource;
   }
}
