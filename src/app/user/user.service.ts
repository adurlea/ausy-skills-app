import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): IUser[] {
    return [
      {
         'userId':1,
       'userName':'Bob',
         'userAge':48,
         'userJob':'Architecte',
       'userSkills':'JEE,Java,SOA',
       'userRating':4.5,
       'userImage':'assets/images/bob.jpg'
       },
       {
         'userId':2,
       'userName':'Melinda',
         'userAge':35,
         'userJob':'Chef de projet',
       'userSkills':'SCRUM,Kanban',
       'userRating':4.7,
       'userImage':'assets/images/melinda.jpg'
       },
       {
         'userId':3,
       'userName':'Sarah',
         'userAge':28,
         'userJob':'Développeur',
       'userSkills':'Java,JavaScript,Angular',
       'userRating':3.5,
       'userImage':'assets/images/sarah.jpg'
       },
       {
         'userId':4,
       'userName':'Eric',
         'userAge':23,
         'userJob':'Développeur',
       'userSkills':'C++,.Net',
       'userRating':3.7,
       'userImage':'assets/images/eric.jpg'
       },
       {
         'userId':5,
       'userName':'Vincent',
         'userAge':40,
         'userJob':'Testeur',
       'userSkills':'Junit,Selenium,Squash,Robot Framework',
       'userRating':3.9,
       'userImage':'assets/images/vincent.jpg'
       }
   ];
  }
}
