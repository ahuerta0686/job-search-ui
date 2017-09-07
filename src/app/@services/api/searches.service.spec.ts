import { TestBed, inject } from '@angular/core/testing';

import { ApiSearchesService } from './searches.service';

describe('ApiSearchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSearchesService]
    });
  });

  it('should be created', inject([ApiSearchesService], (service: ApiSearchesService) => {
    expect(service).toBeTruthy();
  }));
});
