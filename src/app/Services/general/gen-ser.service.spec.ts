import { TestBed } from '@angular/core/testing';

import { GenSerService } from './gen-ser.service';

describe('GenSerService', () => {
  let service: GenSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
