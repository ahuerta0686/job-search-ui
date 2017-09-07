import { Injectable } from '@angular/core';
import { BaseFactory } from './base.factory';
import { ApiSearchesService } from '../api/searches.service';
import { Search } from '../../@models/search.model';

@Injectable()
export class SearchesFactory extends BaseFactory<Search> {
  protected Model = Search;

  constructor(
    private searchesApi: ApiSearchesService
  ) { super(searchesApi); }

}
