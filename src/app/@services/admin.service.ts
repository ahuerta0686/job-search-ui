import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchesFactory } from './factories/searches.factory';
import { Search } from '../@models/search.model';
import { SnippetFactory } from './factories/snippet.factory';
import { Snippet } from '../@models/snippet.model';

@Injectable()
export class AdminService {
  public searches: Subject<Search[]>;
  public pages: Subject<number>;
  public trackingSnippet: Subject<Snippet>;

  constructor(
    private searchesFactory: SearchesFactory,
    private snippetFactory: SnippetFactory,
  ) {
    this.searches = new Subject();
    this.pages = new Subject();
    this.trackingSnippet = new Subject();
  }

  public init(page: number) {
    return this.searchesFactory.all(page)
      .flatMap((searches: Search[]) => {
        this.searches.next(searches);
        if (searches[0]) {
          this.pages.next(searches[0].getMeta().pages);
        } else {
          this.pages.next(1);
        }
        return this.snippetFactory.all();
      })
      .map((snippets: Snippet[]) => {
        this.trackingSnippet.next(snippets[0] || null);
        return true;
      });
  }

  public setTrackingSnippet(script: string) {
    const snippet = this.snippetFactory.create({html: script});
    return this.snippetFactory.save(snippet);
  }

  public goToPage(page: number) {
    return this.searchesFactory.all(page)
      .map((searches: Search[]) => {
        this.searches.next(searches);
        return true;
      });
  }

}
