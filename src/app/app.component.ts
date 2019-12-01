import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-root',
  template: `
      <div class="ausySkillsTitle">{{title}}</div>
      <app-user-list></app-user-list>
      `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Ausy Skills Application';
}
