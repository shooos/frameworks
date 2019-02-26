import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import USER from '../../../common/constants/USER.json';
import 'common/less/join.less';

@Component({
  selector: 'app-join',
  template: require('./join.component.html'),
})
export class JoinComponent {
  USER = USER;
  items = Object.keys(USER);
  isOpen = false;
  button = 'open';
  userInfo: {[key: string]: any} = {};
  joinForm: FormGroup;

  ngOnInit() {
    this.joinForm = this.builder.group(
      this.items.reduce((acc: {[key: string]: any}, key) => {
        acc[key] = [''];
        return acc;
      }, {})
    );
  }

  inputInfo(key: string, e: Event) {
    if (!e.target) return;

    this.userInfo[key] = (e.target as HTMLInputElement).value;

    // if (key === 'id') {
    //   if (this.$store.getters[GetterTypes.IS_DUPLICATED](this.userInfo[key])) {
    //     this.form.key.setCustomValidity(MESSAGES.DUPLICATED_ID);
    //   } else {
    //     this.form[key].setCustomValidity('');
    //   }
    // }
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

  register() {}

  constructor(private builder: FormBuilder) {}
}
