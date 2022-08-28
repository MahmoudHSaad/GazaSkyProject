import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';
import { Files } from './files.model';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  title ="Files Data Table"
  dataSourceCopy:Array<Files> =[];
  constructor(private FileService:FileService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.dataSourceCopy =this.FileService.getAllFile() 
    }

}
