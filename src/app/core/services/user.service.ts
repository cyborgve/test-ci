import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { environment } from '@environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api_url = environment.api_url + '/users';
  private api_url_id = (id: string) => this.api_url + '/' + id;

  constructor(private _http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this._http.get<User[]>(this.api_url);
  }

  findById(id: string): Observable<User> {
    return this._http.get<User>(this.api_url_id(id));
  }

  save(user: User): Observable<User> {
    return this._http.post<User>(this.api_url, user);
  }

  update(id: string, partialUser: Partial<User>): Observable<User> {
    return this._http.put<User>(this.api_url_id(id), partialUser);
  }

  patch(id: string, partialUser: Partial<User>): Observable<User> {
    return this._http.patch<User>(this.api_url_id(id), partialUser);
  }

  delete(id: string): Observable<User> {
    return this._http.delete<User>(this.api_url_id(id));
  }

  exist(id: string): Observable<boolean> {
    let exist = new Subject<boolean>();
    this._http.get(this.api_url_id(id)).subscribe({
      next: () => exist.next(true),
      error: () => exist.next(false),
      complete: () => {},
    });
    return exist.asObservable();
  }
}
