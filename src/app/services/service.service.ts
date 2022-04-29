import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  URL = 'http://localhost:8080/upload';

  headers = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    //headers.append('Content-Type', 'multipart/form-data')
  }

 // const headers = new HttpHeaders({Authorization: 'Bearer ' + this.token});
  constructor(private http: HttpClient) { }

  public fileupload(fileXML: File): Observable<File> {
    console.log('entro al servicio;');
    console.log(fileXML);
    //return this.httpClient.post<T>(this.URL + fileXML);
    return this.http.post<File>(this.URL, fileXML, this.headers);
  }

}


