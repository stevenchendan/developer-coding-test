import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './models/user';

@Injectable()
export class DataService {
  private userUrl = 'assets/api/users.json';
  private pathUrl = 'assets/api/quest_pathways.json';
  constructor(private http: Http) { }

  getData(url): Observable<any> {
    return this.http.get(url)
      .map(res => res.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }

}
