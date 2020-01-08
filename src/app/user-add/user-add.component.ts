import { Component, OnInit } from '@angular/core';
import { IUserNew } from '../user/user-new';
import { NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  newUser: IUserNew;
  postErrorMesssage: string;
  postError: boolean;
  postSuccess: boolean;
  postSuccessMesssage: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.initPostVariables();
    this.newUser = this.initNewUser();
  }

  onSubmit(form: NgForm) {
    this.initPostVariables();
    if (form.valid) {
      console.log('Form valid: ' + form.valid);
      this.userService.postNewUser(form.value).subscribe({
        next: user => this.handlePostSuccess(user),
        error: err => this.handlePostError(err)
      });
    } else {
      console.log('Form valid: ' + form.valid);
      this.postError = true;
      this.postErrorMesssage = 'Merci de corriger le formulaire avant de soumettre.';
    }
  }

  private initPostVariables() {
    this.postError = false;
    this.postErrorMesssage = null;
    this.postSuccess = false;
    this.postSuccessMesssage = null;
  }

  private handlePostSuccess(user: IUser) {
    if (!user) {
      this.postError = true;
      this.postErrorMesssage = 'There was a problem with the creation of the user! Please try again later!';
    } else {
      this.newUser = this.initNewUser();
      this.postSuccess = true;
      this.postSuccessMesssage = 'The user ' + user.userName + ' was created!';
    }
  }

  private handlePostError(err: any): void {
    if (err) {
      console.log('Error: ' + err);
      this.postError = true;
      this.postErrorMesssage = err;
    }
  }

  private initNewUser(): IUserNew {
    return {
      name: null,
      age: null,
      job: 'CDP',
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
  }
}
