import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: IUser;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId).subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
    });

    console.log('UserID: ' + this.userId);
  }

}
