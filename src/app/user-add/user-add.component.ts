import { Component, OnInit } from '@angular/core';
import { IUserNew } from '../user/user-new';
import { NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  newUser: IUserNew = {
    name: null,
    age: null,
    job: null,
    rating: 0,
    jee: false,
    java: false,
    soa: false,
    javascript: false,
    angular: false,
    junit: false,
    selenium: false,
    squash: false,
    robot: false,
    cpp: false,
    net: false,
    scrum: false,
    kanban: false
  };
  errorMessage: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form posted: ' + form.valid);
      this.userService.postNewUser(form.value).subscribe({
        next: user => this.newUser = user,
        error: err => this.errorMessage = err
      });

      console.log('success: ' + JSON.stringify(this.newUser));
    } else {
      console.log('Form posted: ' + form.valid);
    }
  }

}
