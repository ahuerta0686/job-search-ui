import { TestBed, inject } from '@angular/core/testing';

import { SnippetFactory } from './snippet.factory';

describe('SnippetFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnippetFactory]
    });
  });

  it('should be created', inject([SnippetFactory], (service: SnippetFactory) => {
    expect(service).toBeTruthy();
  }));
});
