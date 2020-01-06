import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnChanges {
  @Input() rating: number;
  @Input() age: number;
  statusNormal = 'disabled';
  statusEleve = 'disabled';
  statusHP = 'disabled';

  constructor() { }

  ngOnChanges(): void {
    const ratio = this.age / this.rating;

    if (ratio < 7) {
      this.statusHP = 'active';
    } else if (ratio <= 8) {
      this.statusEleve = 'active';
    } else {
      this.statusNormal = 'active';
    }
  }

}
