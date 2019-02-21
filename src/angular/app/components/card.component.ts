import {Component} from '@angular/core';
import USER from '../../../common/constants/USER.json';
import LABELS from '../../../common/constants/LABELS.json';
import 'common/less/card.less';
import {User, Sort} from '../Types.js';
import {Store, select} from '@ngrx/store';
import * as fromUsers from '../store/reducers/users.reducer';
import {Users} from '../store/models/users.model.js';
import {GetUsers} from '../store/actions/users.action';
import {Observable} from 'rxjs';

@Component({
  template: require('./card.component.html'),
})
export class CardComponent {
  USER = USER;
  LABELS = LABELS;
  items = Object.keys(USER);
  users$: Observable<User[]>;
  sort$: Observable<Sort>;

  ngOnInit() {
    this.sort$ = this.store.pipe(select(fromUsers.getSort));
    this.users$ = this.store.pipe(select(fromUsers.getList));
    this.sort$.subscribe((sort) => this.store.dispatch(new GetUsers({sort})));
  }

  constructor(private store: Store<Users>) {}
}
