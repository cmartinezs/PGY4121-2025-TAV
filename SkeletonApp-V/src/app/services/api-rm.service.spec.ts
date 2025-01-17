import { TestBed } from '@angular/core/testing';

import { ApiRmService } from './api-rm.service';

describe('ApiRmService', () => {
  let service: ApiRmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
