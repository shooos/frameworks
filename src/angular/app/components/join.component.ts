import {Component} from '@angular/core';

import USER from '../../../common/constants/USER.json';

@Component({
  selector: '[app-join]',
  template: require('./join.component.html'),
})
export class JoinComponent {
  USER = USER;
  items = Object.keys(USER);
  isOpen = false;
  button = 'open';
  userInfo: {[key: string]: any} = {};
  form: HTMLFormElement;

  ngAfterViewInit() {
    this.form = document.getElementsByName('user-info')[0] as HTMLFormElement;
  }

  buttonChange() {}

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

  open() {}

  close() {}

  register() {}
}
