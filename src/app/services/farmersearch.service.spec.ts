import { TestBed } from '@angular/core/testing';

import { FarmersearchService } from './farmersearch.service';

describe('FarmersearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmersearchService = TestBed.get(FarmersearchService);
    expect(service).toBeTruthy();
  });
});
