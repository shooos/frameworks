import {Component} from '@angular/core';
import 'common/less/common.less';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
})
export class AppComponent {
  title = 'Angular example';
  headerStyle = {
    minHeight: '60px',
    flexBasis: '60px',
  };
}
