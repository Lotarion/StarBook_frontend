import { TestBed } from '@angular/core/testing';

import { EarthPositionService } from './earth-position.service';

describe('EarthPositionService', () => {
  let service: EarthPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarthPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
