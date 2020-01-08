import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddComponent } from './user-add.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserAddComponent', () => {
  let component: UserAddComponent;
  let fixture: ComponentFixture<UserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsModule, AlertModule, FormsModule, HttpClientTestingModule],
      providers: [AlertConfig],
      declarations: [ UserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
