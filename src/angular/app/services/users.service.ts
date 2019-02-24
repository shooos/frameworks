import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Sort, User} from '../Types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private static USERS_STORAGE_KEY = 'users';

  constructor() {}

  getUsers(sort: Sort): Observable<User[]> {
    try {
      const json = localStorage.getItem(UsersService.USERS_STORAGE_KEY) || '[]';
      const users: User[] = JSON.parse(json);
      users.sort(
        (a, b) =>
          new Intl.Collator().compare(a[sort.key].toString(), b[sort.key].toString()) * (sort.order === 'desc' ? -1 : 1)
      );

      return Observable.create((observer: any) => {
        observer.next(users);
        observer.complete();
      });
    } catch (e) {
      throw e;
    }
  }

  pushUser(user: User) {
    try {
      const json = localStorage.getItem(UsersService.USERS_STORAGE_KEY) || '[]';
      const users = JSON.parse(json);
      users.push(user);
      return this._saveUsers(users);
    } catch (e) {
      throw e;
    }
  }

  removeUser(id: string): Observable<void> {
    try {
      const json = localStorage.getItem(UsersService.USERS_STORAGE_KEY) || '[]';
      const users = JSON.parse(json);
      return this._saveUsers(users.filter((user: User) => user.id !== id));
    } catch (e) {
      throw e;
    }
  }

  _saveUsers(users: User[]): Observable<void> {
    try {
      localStorage.setItem(UsersService.USERS_STORAGE_KEY, JSON.stringify(users));
      return Observable.create((observer: any) => observer.complete());
    } catch (e) {
      throw e;
    }
  }
}
