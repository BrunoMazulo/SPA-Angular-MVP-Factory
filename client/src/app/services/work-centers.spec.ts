import { TestBed } from '@angular/core/testing';

import { WorkCenters } from './work-centers';

describe('WorkCenters', () => {
  let service: WorkCenters;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkCenters);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
