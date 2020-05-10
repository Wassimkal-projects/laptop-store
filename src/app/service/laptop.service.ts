import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractHttpService} from './abstract-http-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService extends AbstractHttpService {
  accountUrl = this.url + 'laptop';
  pageSize = 10;
  constructor(private httpclient: HttpClient) {
    super();
  }

  getSearchedLaptops(filters: any, page: number): Observable<any> {
    return this.httpclient.post<any>(`${this.accountUrl}/search?paged=true&size=${this.pageSize}&page=${page}`, filters, {observe: 'response'});
  }

  helloWorld(): Observable<string> {
    return this.httpclient.get<string>(this.accountUrl + 'hello');
  }
}
