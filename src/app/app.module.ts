import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConvertToList } from './pipes/convert-to-list.pipes';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertToList
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
