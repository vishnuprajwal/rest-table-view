import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://localhost:3000/myjson";
  private API_URL = "http://dev-deliveryconnector.ap-south-1.elasticbeanstalk.com:8080/getAllRecordsforComletetion";


  constructor(private httpClient: HttpClient) { }
  // public first: string = "";
  // public prev: string = "";


  parseLinkHeader(header) {

    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach(p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });


  }



  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequestToUrl(url: string) {
    return this.httpClient.get(url, { observe: "response" }).pipe(retry(3),
      catchError(this.handleError),
      tap(res => {
        console.log(res.headers.get('Link'));
        this.parseLinkHeader(res.headers.get('Link'));

      }));
  }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }


  public getAPI() {
    return this.httpClient.get(this.API_URL);
  }



  
}


