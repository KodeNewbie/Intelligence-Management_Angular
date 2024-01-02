import { TestBed } from '@angular/core/testing';

import { SpyService } from './spy.service';

describe('SpyService', () => {
  let service: SpyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
