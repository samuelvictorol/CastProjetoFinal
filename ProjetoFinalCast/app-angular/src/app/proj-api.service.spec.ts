import { TestBed } from '@angular/core/testing';

import { ProjApiService } from './proj-api.service';

describe('ProjApiService', () => {
  let service: ProjApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
