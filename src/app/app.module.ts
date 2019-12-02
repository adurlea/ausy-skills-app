import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConvertToList } from './pipes/convert-to-list.pipes';
import { UserRatingComponent } from './shared/user-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertToList,
    UserRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
