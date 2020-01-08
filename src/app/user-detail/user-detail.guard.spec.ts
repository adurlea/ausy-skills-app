import { TestBed, async, inject } from '@angular/core/testing';

import { UserDetailGuard } from './user-detail.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserDetailGuard]
    });
  });

  it('should ...', inject([UserDetailGuard], (guard: UserDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
