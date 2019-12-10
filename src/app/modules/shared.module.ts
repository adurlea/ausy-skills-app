import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRatingComponent } from '../shared/user-rating.component';
import { ConvertToList } from '../pipes/convert-to-list.pipes';


@NgModule({
  declarations: [
    UserRatingComponent,
    ConvertToList
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    UserRatingComponent,
    ConvertToList
  ]
})
export class SharedModule { }
