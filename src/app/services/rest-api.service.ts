import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL =  environment.apiUrl;

   // HttpClient API get() method => Fetch employees list
   getCountries(): Observable<any> {
    return this.http
      .get<any>(this.apiURL + '/all')
  }

  constructor(private http: HttpClient) { }
}
