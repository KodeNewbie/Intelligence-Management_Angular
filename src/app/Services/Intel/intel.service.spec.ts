import { TestBed } from '@angular/core/testing';

import { IntelService } from './intel.service';

describe('IntelService', () => {
  let service: IntelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
