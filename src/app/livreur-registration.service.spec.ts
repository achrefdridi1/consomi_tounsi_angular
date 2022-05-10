import { TestBed } from '@angular/core/testing';

import { LivreurRegistrationService } from './livreur-registration.service';

describe('LivreurRegistrationService', () => {
  let service: LivreurRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreurRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
