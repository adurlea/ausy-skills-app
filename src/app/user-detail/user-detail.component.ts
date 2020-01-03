import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string;
  currentUser: IUser;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private userService: UserService,
              private currentRouter: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId).subscribe({
      next: user => this.handleGetSuccess(user),
      error: err => this.handleGetError(err)
    });

    console.log('UserID: ' + this.userId);
  }

  onBack(): void {
    this.currentRouter.navigate(['/users']);
  }

  onHome(): void {
    this.currentRouter.navigate(['/welcome']);
  }

  private handleGetSuccess(user: IUser) {
    if (!user || JSON.stringify(user) === '{}') {
      alert('Invalide user Id: ' + this.userId);
      this.currentRouter.navigate(['/users']);
    } else {
      this.currentUser = user;
    }
  }

  private handleGetError(err: any) {
    alert('Error getting user: ' + err);
    this.currentRouter.navigate(['/users']);
  }
}
