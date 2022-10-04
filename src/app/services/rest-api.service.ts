import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL =  environment.apiUrl;

   // HttpClient API get() method => Fetch employees list
   getCountries(): Observable<any> {
    return this.http
      .get<any>(this.apiURL + '/all').pipe(map((el) => el.slice(0, 10)))
  }

  constructor(private http: HttpClient) { }
}
