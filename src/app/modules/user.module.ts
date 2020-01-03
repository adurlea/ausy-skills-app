import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from '../user-add/user-add.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserAddComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot()
  ]
})
export class UserModule { }
