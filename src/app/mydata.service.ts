import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http: HttpClient) { }

  btnClick() {
    return console.log('Msg from the service: you clicked the button!');
  }

  getData() {
    return this.http.get('https://reqres.in/api/users')
  }
}
