import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, toArray, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  private teamUrl = 'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json'

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.teamUrl).pipe(
      map(res => {
        console.log(Object.values(res['data'][0]['attributes']['memberCards']));
        return Object.values(res['data'][0]['attributes']['memberCards']);
      })
    )
  }
}
