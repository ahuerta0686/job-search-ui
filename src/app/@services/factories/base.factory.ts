import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiBaseService } from '../api/base.service';

import { Search } from '../../@models/search.model';
import { Snippet } from '../../@models/snippet.model';

@Injectable()
export abstract class BaseFactory<M extends { _id?: string }> {
  protected abstract Model;

  constructor(
    protected baseApi: ApiBaseService
  ) { }

  public create(body: any, meta: any = null): M {
    return new this.Model(body, meta);
  }

  public all(page?: number): Observable<M[]> {
    return this.baseApi.index({ page })
      .map(body => {
        const models = [];
        body.data.forEach((d, i) => {
          if (i === 0) {
            models.push(this.create(d, body.meta));
          } else {
            models.push(this.create(d));
          }
        });
        return models;
      });
  }

  public find(id: string): Observable<M> {
    return this.baseApi.read(id)
      .map(body => {
        const model = this.create(body.data, body.meta);
        return model;
      });
  }

  public save(model: M, extras: any = {}, query: any = {}): Observable<M> {
    if (!model._id) {
      return this.baseApi.create(model, extras, query)
        .map(body => {
          return this.create(body.data, body.meta);
        });
    }
  }

}
