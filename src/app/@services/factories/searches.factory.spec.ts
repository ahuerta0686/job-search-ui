import { TestBed, inject } from '@angular/core/testing';

import { SearchesFactory } from './searches.factory';

describe('SearchesFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchesFactory]
    });
  });

  it('should be created', inject([SearchesFactory], (service: SearchesFactory) => {
    expect(service).toBeTruthy();
  }));
});
