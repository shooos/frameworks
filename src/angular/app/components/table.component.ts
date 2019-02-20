import {Component, Input} from '@angular/core';
import USER from '../../../common/constants/USER.json';
import LABELS from '../../../common/constants/LABELS.json';
import 'common/less/table.less';
import {User, Sort} from '../Types.js';
import {Store} from '@ngrx/store';
import * as fromUsers from '../store/reducers/users.reducer';
import {Users} from '../store/models/users.model.js';
import {GetUsers} from '../store/actions/users.action.js';

@Component({
  template: require('./table.component.html'),
})
export class TableComponent {
  @Input() styles: CSSStyleDeclaration;
  USER = USER;
  LABELS = LABELS;
  items = Object.keys(USER);
  users: User[] = [];
  sort: Sort;

  ngOnInit() {
    this.store.dispatch(new GetUsers(this.store.select(fromUsers.getSort())));
  }

  constructor(private store: Store<Users>) {}
}
