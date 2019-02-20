import {Component, Input} from '@angular/core';
import 'common/less/card.less';

@Component({
  template: require('./card.component.html'),
})
export class CardComponent {
  @Input() styles: CSSStyleDeclaration;
}
