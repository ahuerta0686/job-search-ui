import { TestBed, inject } from '@angular/core/testing';

import { BaseFactory } from './base.factory';

describe('BaseFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseFactory]
    });
  });

  it('should be created', inject([BaseFactory], (service: BaseFactory) => {
    expect(service).toBeTruthy();
  }));
});
