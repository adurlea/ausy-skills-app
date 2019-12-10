import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailGuard } from '../user-detail/user-detail.guard';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserAddComponent } from '../user-add/user-add.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UserListComponent },
      { path: 'users/:id',
        canActivate: [UserDetailGuard],
        component: UserDetailComponent
      },
      { path: 'userAdd', component: UserAddComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
