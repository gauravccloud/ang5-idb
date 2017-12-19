import { Component, OnInit } from '@angular/core';
import {DataService} from '../../app.service';
import {MatTableDataSource} from '@angular/material';
declare var idb:any 

@Component({
  selector: 'employee-form',
  templateUrl: './employeeForm.component.html',
  styleUrls: ['./employeeForm.component.css']
})
export class EmployeeComponent implements OnInit{
    name:string = "";
    age:string = "";
    company:string = ""
    displayedColumns: Array<string>;
    dataSource;
    constructor(private dataService:DataService) {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    }

    submitData() {
          var item = {};
          item["name"] = this.name;
          item["age"] = this.age;
          item["company"] = this.company;
          this.dataService.addItem(item).then(function(response){
                console.log("Reponse", response);
          })
    }

    ngOnInit() {
        this.dataService.getAllItems().then((response:Element[]) => {
            console.log("Response", response);
            this.dataSource = new MatTableDataSource<Element>(response);
        })
    }

    searchByName() {
        this.dataService.getItemByKey("").then(function(response){

        })
    }

    enableNotification() {
        
    }
}

export interface Element {
  name: string;
  company: string;
  age: string;
}

