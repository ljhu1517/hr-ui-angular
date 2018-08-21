//ANGULAR TABLE EXAMPLE THAT WORKS

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  //predefined columns list
  columnNames = [{
      id: "employee_id",
      value: "Employee ID"
    }, {
      id: "first_name",
      value: "First Name"
    }, {
      id: "last_name",
      value: "Last Name"
    },{
      id: "salary",
      value: "Salary"
    }, {
      id: "email",
      value: "Email"
    }
  ];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }
  createTable() {
    
    let tableArr: Employee[] = [
      { employee_id: 1, first_name: 'Woody', last_name: 'Cowboy', salary: 100000, email: 'woodycowboy@gmail.com' },
      { employee_id: 2, first_name: 'Buzz', last_name: 'Lightyear',salary: 100000, email: 'buzzlightyear@gmail.com' },
      { employee_id: 3, first_name: 'Rex', last_name: 'Dinosaur',salary: 100000, email: 'rexdinosaur@gmail.com' },
      { employee_id: 4, first_name: 'Jessie', last_name: 'Cowgirl',salary: 100000, email: 'jessiecowgirl@gmail.com' },
      { employee_id: 5, first_name: 'Lotso', last_name: 'Bear',salary: 100000, email: 'lotsobear@gmail.com' },
      { employee_id: 6, first_name: 'Slinky', last_name: 'Dog',salary: 100000, email: 'slinkydog@gmail.com' }
    ];
    
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }
}

export interface Employee {
  employee_id: number,
  first_name: string,
  last_name: string,
  salary: number,
  email: string
}


// import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angular-table-example';
//   displayedColumns: string[] = ['id', 'name', 'salary', 'symbol'];
//   dataSource = new MatTableDataSource(ELEMENT_DATA);

//   @ViewChild(MatSort) sort: MatSort;
//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

//   ngOnInit() {
//     this.dataSource.sort = this.sort;
//     this.dataSource.paginator = this.paginator;

//   }
// }
