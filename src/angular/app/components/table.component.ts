import {Component} from '@angular/core';
import USER from '../../../common/constants/USER.json';
import LABELS from '../../../common/constants/LABELS.json';
import 'common/less/table.less';
import {User, Sort, UserInfoKey} from '../Types.js';
import {Store, select} from '@ngrx/store';
import * as fromUsers from '../store/reducers/users.reducer';
import {Users} from '../store/models/users.model.js';
import {GetUsers, SortUsers, RemoveUser} from '../store/actions/users.action';
import {Observable} from 'rxjs';

@Component({
  template: require('./table.component.html'),
})
export class TableComponent {
  USER = USER;
  LABELS = LABELS;
  items = Object.keys(USER);
  users$: Observable<User[]>;
  sort$: Observable<Sort>;
  indicator = false;

  ngOnInit() {
    this.sort$ = this.store.pipe(select(fromUsers.getSort));
    this.users$ = this.store.pipe(select(fromUsers.getList));
    this.sort$.subscribe((sort) => this.store.dispatch(new GetUsers({sort})));
  }

  execSort(key: UserInfoKey) {
    this.indicator = true;

    setTimeout(() => {
      this.store.dispatch(new SortUsers({key}));
      this.indicator = false;
    }, 0);
  }

  removeUser(id: string) {
    this.indicator = true;

    setTimeout(() => {
      this.store.dispatch(new RemoveUser({id}));
      this.indicator = false;
    }, 0);
  }

  constructor(private store: Store<Users>) {}
}
