import {Component, Input} from '@angular/core';
import LABELS from '../../../common/constants/LABELS.json';
import 'common/less/header.less';

@Component({
  selector: '[app-header]',
  template: require('./header.component.html'),
})
export class HeaderComponent {
  @Input() styles: CSSStyleDeclaration;
  LABELS = LABELS;

  backToTop(): void {
    location.href = '/';
  }
}
