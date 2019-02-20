import {Component} from '@angular/core';
import {Location} from '@angular/common';
import LABELS from '../../../common/constants/LABELS.json';
import 'common/less/switcher.less';

@Component({
  selector: '[app-switcher]',
  template: require('./switcher.component.html'),
})
export class SwitcherComponent {
  LABELS = LABELS;

  switching(mode: String) {
    this.location.go(`/${mode}`);
  }

  constructor(private location: Location) {}
}
