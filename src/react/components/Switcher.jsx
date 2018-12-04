import 'common/less/switcher.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LABELS from 'common/constants/LABELS.json';

class Switcher extends Component {
  switching(location) {
    this.props.history.push(`/${location}`);
  }

  render() {
    return (
      <div className="switcher">
        <span className="table" onClick={() => this.switching('table')}>
          {LABELS.TABLE_VIEW}
        </span>
        <span className="card" onClick={() => this.switching('card')}>
          {LABELS.CARD_VIEW}
        </span>
      </div>
    );
  }
}

export default withRouter(connect()(Switcher));
