import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchesFactory } from './factories/searches.factory';
import { Search } from '../@models/search.model';

@Injectable()
export class SearchService {

  constructor(
    private searchesFactory: SearchesFactory,
  ) { }

  public init(): Observable<any> {
    return Observable.of(true);
  }

}
