import { TestBed } from '@angular/core/testing';

import { UserForumService } from './user-forum.service';

describe('UserRegistationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserForumService = TestBed.get(UserForumService);
    expect(service).toBeTruthy();
  });
});
