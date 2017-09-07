import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchesFactory } from './factories/searches.factory';
import { Search } from '../@models/search.model';

@Injectable()
export class ResultsService {
  public results: Subject<any>;
  public pages: Subject<number>;

  constructor(
    private searchesFactory: SearchesFactory,
  ) {
    this.results = new Subject();
    this.pages = new Subject();
  }

  public init(zip: number, query: string, page: number): Observable<any> {
    const search = this.searchesFactory.create({ query, zip })
    return this.searchesFactory.save(search, null, { page })
      .map(search => {
        this.results.next(search.getMeta().results);
        this.pages.next(search.getMeta().pages);
        return true;
      });
  }
}
