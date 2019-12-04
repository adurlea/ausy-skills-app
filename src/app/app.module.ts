import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConvertToList } from './pipes/convert-to-list.pipes';
import { UserRatingComponent } from './shared/user-rating.component';
import { WelcomeComponent } from './home/welcome.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailGuard } from './user-detail/user-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertToList,
    UserRatingComponent,
    WelcomeComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: UserListComponent },
      { path: 'users/:id',
        canActivate: [UserDetailGuard],
        component: UserDetailComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
