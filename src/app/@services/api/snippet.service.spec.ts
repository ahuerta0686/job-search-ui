import { TestBed, inject } from '@angular/core/testing';

import { ApiSnippetService } from './snippet.service';

describe('ApiSnippetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSnippetService]
    });
  });

  it('should be created', inject([ApiSnippetService], (service: ApiSnippetService) => {
    expect(service).toBeTruthy();
  }));
});
