import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  employeeCode=""

  readValues=()=>{
    let data:any={
      "employeeCode":this.employeeCode
    }
    console.log(data)
  }
}
