import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = 'Liste des utilisateurs';
  imageSize: number = 50;
  showNotes: boolean = true;
  _userFilter: string;

  filteredUsers: IUser[];
  users: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  get userFilter() {
    return this._userFilter;
  }

  set userFilter(value: string) {
    this._userFilter = value;
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
