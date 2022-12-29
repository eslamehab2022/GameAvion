import { TestBed } from '@angular/core/testing';

import { AuthFormsService } from './auth-forms.service';

describe('AuthFormsService', () => {
  let service: AuthFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
