import { TestBed } from '@angular/core/testing';

import { ScoolService } from './scool.service';

describe('ScoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoolService = TestBed.get(ScoolService);
    expect(service).toBeTruthy();
  });
});
