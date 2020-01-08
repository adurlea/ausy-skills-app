import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingComponent } from './user-rating.component';

describe('UserRatingComponent', () => {
  let component: UserRatingComponent;
  let fixture: ComponentFixture<UserRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on change HP', () => {
    component.age = 25;
    component.rating = 5;
    component.ngOnChanges();

    expect(component.statusNormal).toBe('disabled');
    expect(component.statusEleve).toBe('disabled');
    expect(component.statusHP).toBe('active');
  });

  it('should on change Eleve', () => {
    component.age = 25;
    component.rating = 3.5;
    component.ngOnChanges();

    expect(component.statusNormal).toBe('disabled');
    expect(component.statusEleve).toBe('active');
    expect(component.statusHP).toBe('disabled');
  });

  it('should on change Normal', () => {
    component.age = 25;
    component.rating = 3;
    component.ngOnChanges();

    expect(component.statusNormal).toBe('active');
    expect(component.statusEleve).toBe('disabled');
    expect(component.statusHP).toBe('disabled');
  });
});
