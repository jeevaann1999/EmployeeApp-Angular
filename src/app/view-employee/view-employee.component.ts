import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
data:any=[
  {
  "name":"Jeeva",
  "designation":"Software Engineer Trainee",
  "salary":25000,
  "company":"nest"
  },
  {
  "name":"Ann",
  "designation":"Software Engineer Trainee",
  "salary":24000,
  "company":"tcs"
  },
  {
  "name":"Jayan",
  "designation":"Software Engineer Trainee",
  "salary":28000,
  "company":"cts"
  },
  {
    "name":"neha",
    "designation":"Software Engineer Trainee",
    "salary":38000,
    "company":"cts"
    },
    {
      "name":"mary",
      "designation":"Software Engineer Trainee",
      "salary":45000,
      "company":"cts"
      }

]



}
