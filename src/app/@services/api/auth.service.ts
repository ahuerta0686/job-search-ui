import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiAuthService {
  private url: string;

  constructor(
    private http: Http,
    @Inject('API_URL') apiUrl
  ) {
    this.url = apiUrl + '/auth/token';
  }

  public authenticate(body: any) {
    return this.http.post(this.url, body)
      .map((res: Response) => {
        const data = res.json().data;
        sessionStorage.setItem('token', data.token);
        return {message: 'Success'};
      })
      .catch((errors) => {
        console.log(errors);
        return Observable.throw({errors: ['Authentication error']});
      });
  }

  public verify() {
    const token = sessionStorage.getItem('token') || null;
    if (!token) return Observable.of(false);

    const url = `${this.url}?token=${token}`;
    return this.http.get(url).map((res: Response) => true).catch(() => Observable.of(false));
  }

}
