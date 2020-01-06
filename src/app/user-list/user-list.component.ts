import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle = 'Liste des utilisateurs';
  imageSize = 50;
  showNotes = true;
  currentUserFilter: string;

  filteredUsers: IUser[];
  users: IUser[];
  errorMessage: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: err => this.errorMessage = err
    });
    this.filteredUsers = this.users;
  }

  get userFilter() {
    return this.currentUserFilter;
  }

  set userFilter(value: string) {
    this.currentUserFilter = value;
    this.filteredUsers = this.performFilter(this.userFilter);
  }

  toogleNotes() {
    this.showNotes = !this.showNotes;
  }

  performFilter(filterBy: string): IUser[]  {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) =>
          user.userName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
