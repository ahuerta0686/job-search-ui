import { TestBed, inject } from '@angular/core/testing';

import { ApiBaseService } from './base.service';

describe('ApiBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBaseService]
    });
  });

  it('should be created', inject([ApiBaseService], (service: ApiBaseService) => {
    expect(service).toBeTruthy();
  }));
});
