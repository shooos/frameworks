import {Component, Input} from '@angular/core';
import 'common/less/table.less';

@Component({
  template: require('./table.component.html'),
})
export class TableComponent {
  @Input() styles: CSSStyleDeclaration;
}
