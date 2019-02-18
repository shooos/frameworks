import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Sort, User} from '../Types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private static USERS_STORAGE_KEY = 'users';

  constructor() {}

  getUsers(sort: Sort): Observable<User[]> {
    try {
      const users: User[] = JSON.parse(localStorage.getItem(UsersService.USERS_STORAGE_KEY) || '');
      users.sort((a, b) => new Intl.Collator().compare(a[sort.key].toString(), b[sort.key].toString()) * (sort.order === 'desc' ? -1 : 1));

      return Observable.create((observer: any) => {
        observer.next(users);
        observer.complete();
      });
    } catch (e) {
      throw e;
    }
  }
}
