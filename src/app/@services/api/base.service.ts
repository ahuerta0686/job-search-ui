import { Inject, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class ApiBaseService {
  protected baseUrl: string;
  protected abstract resourcePrefix: string;

  protected static extractBody(res: Response) {
    return res.json();
  }

  constructor(
    protected http: Http,
    @Inject('API_URL') apiUrl
  ) {
    this.baseUrl = apiUrl;
  }

  protected url() {
    return `${this.baseUrl}/${this.resourcePrefix}`;
  }

  protected token() {
    return sessionStorage.getItem('token') || null;
  }

  public index(query?: any) {
    let url = this.url();
    
    let search: URLSearchParams = new URLSearchParams();
    Object.keys(query).forEach(key => {
      search.set(key, query[key]);
    });

    const token = this.token();
    if (!!token) { url += `?token=${token}`; }
    return this.http.get(url, { search }).map(ApiBaseService.extractBody);
  }

  public create(body: any, extra: any, query: any) {
    let url = `${this.url()}/create`;

    let search: URLSearchParams = new URLSearchParams();
    Object.keys(query).forEach(key => {
      search.set(key, query[key]);
    });

    const token = this.token();
    if (!!token) { url += `?token=${token}`; }
    return this.http.post(url, body, { search }).map(ApiBaseService.extractBody);
  }

  public read(id: any) {
    let url = `${this.url()}/${id}`;
    const token = this.token();
    if (!!token) { url += `?token=${token}`; }
    return this.http.get(url).map(ApiBaseService.extractBody);
  }

}
