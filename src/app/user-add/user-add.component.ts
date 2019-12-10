import { Component, OnInit } from '@angular/core';
import { IUserNew } from '../user/user-new';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  newUser: IUserNew = {
    name: 'Ausy',
    age: 35,
    job: 'ARC',
    rating: 4,
    jee: true,
    java: true,
    soa: false,
    javascript: false,
    angular: true,
    junit: false,
    selenium: false,
    squash: false,
    robot: false,
    cpp: false,
    net: false,
    scrum: false,
    kanban: false
  };
  constructor() { }

  ngOnInit() {
  }

}
