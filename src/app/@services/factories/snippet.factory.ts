import { Injectable } from '@angular/core';
import { BaseFactory } from './base.factory';
import { ApiSnippetService } from '../api/snippet.service';
import { Snippet } from '../../@models/snippet.model';

@Injectable()
export class SnippetFactory extends BaseFactory<Snippet> {
  protected Model = Snippet;

  constructor(
    private snippetApi: ApiSnippetService,
  ) { super(snippetApi); }

}
