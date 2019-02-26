import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromUsers from '../store/reducers/users.reducer';

import USER from '../../../common/constants/USER.json';
import MESSAGES from '../../../common/constants/MESSAGES.json';
import 'common/less/join.less';
import {Users} from '../store/app.state.js';
import {UserInfoKey, User} from '../Types';
import {AppendUser} from '../store/actions/users.action';

@Component({
  selector: 'app-join',
  template: require('./join.component.html'),
})
export class JoinComponent {
  USER = USER;
  items = Object.keys(USER);
  isOpen = false;
  button = 'open';
  userInfo: User = {};
  joinForm: FormGroup;
  form: HTMLFormElement | null;

  ngOnInit() {
    this.joinForm = this.builder.group(
      this.items.reduce((acc: {[key: string]: any}, key: UserInfoKey) => {
        acc[key] = [''];
        return acc;
      }, {})
    );
  }

  ngAfterViewInit() {
    this.form = document.querySelector('[name="user-info"]');
  }

  validate(key: UserInfoKey, e: Event) {
    if (!e.target) return;

    const value = (this.userInfo[key] = (e.target as HTMLInputElement).value);

    if (key === 'id') {
      this.store$.select(fromUsers.getList).subscribe((list) => {
        if (!this.form) return;

        const element = this.form[key as string] as HTMLInputElement;
        element.setCustomValidity(list.some((user) => user.id === value) ? MESSAGES.DUPLICATED_ID : '');
      });
    }
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.button = 'open';
  }

  buttonChange() {
    if (this.isOpen) {
      this.button = 'register';
    }
  }

  register() {
    if (this.form && this.form.reportValidity()) {
      this.store$.dispatch(new AppendUser({user: this.userInfo}));
      this.close();
      Object.keys(this.userInfo).forEach((key: UserInfoKey) => (this.userInfo[key] = ''));
    }
  }

  constructor(private builder: FormBuilder, private store$: Store<Users>) {}
}
