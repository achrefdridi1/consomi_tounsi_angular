import { TestBed } from '@angular/core/testing';

import { ReclamationRegistrationService } from './reclamation-registration.service';

describe('ReclamationRegistrationService', () => {
  let service: ReclamationRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
