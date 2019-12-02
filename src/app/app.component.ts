import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <div class="ui pointing menu">
        <a class="item" [routerLink]="['/welcome']">Accueil</a>
        <a class="item" [routerLink]="['/users']">Liste des utilisateurs</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Ausy Skills Application';
}
