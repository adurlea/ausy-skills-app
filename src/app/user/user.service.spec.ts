import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ErrorHandler } from '@angular/core';

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [UserService]
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers should return an Observable<IUser[]>', () => {
    const dummyUsers = [
      { userId: 1, userName: 'Bob', userAge: 25, userJob: 'DEV',
        userSkills: 'Java, JEE', userRating: 4.5, userImage: 'imageBob'},
      { userId: 2, userName: 'Ana', userAge: 32, userJob: 'CDP',
        userSkills: 'Scrum, Kanban', userRating: 5, userImage: 'imageAna'},
    ];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(`${service.baseUrl}${service.usersPathParam}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

  it('getUser should return an Observable<IUser>', () => {
    const dummyUser = { userId: 1, userName: 'Bob', userAge: 25, userJob: 'DEV',
        userSkills: 'Java, JEE', userRating: 4.5, userImage: 'imageBob'};

    service.getUser('1').subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`${service.baseUrl}${service.userPathParam}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('postNewUser should return an Observable<IUser>', () => {
    const dummyUser = { userId: 1, userName: 'Bob', userAge: 25, userJob: 'DEV',
        userSkills: 'Java, JEE', userRating: 4.5, userImage: 'imageBob'};
    const newUser = {
      name: 'Bob',
      age: 25,
      job: 'DEV',
      rating: 4.5,
      jee: true,
      java: true,
      soa: false,
      javascript: false,
      angular: false,
      junit: false,
      selenium: false,
      squash: false,
      robot: false,
      cpp: false,
      net: false,
      scrum: false,
      kanban: false};

    service.postNewUser(newUser).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`${service.baseUrl}${service.newUserPathParam}`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });

  it('expect server side error', () => {
   // expect(service.getUsers()).toThrow(new Error('Parsing is not possible'));

    service.getUsers().subscribe(error => {
      expect(error).toThrow(new Error('fix some tests'));
    });

    const req = httpMock.expectOne(`${service.baseUrl}${service.usersPathParam}`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('click'), {status: 404});
  });
});
