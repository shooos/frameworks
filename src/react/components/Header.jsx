import 'common/less/header.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import LABELS from 'common/constants/LABELS.json';
import Join from './Join';
import Switcher from './Switcher';

class Header extends Component {
  render() {
    return (
      <div style={this.props.styles}>
        <div className="header">
          <span className="back" title={LABELS.BACK_TO_TOP} onClick={() => (location.href = '/')} />
          <h1>{LABELS.HEADER_TITLE}</h1>
        </div>
        <Join />
        <Switcher />
      </div>
    );
  }
}

export default connect()(Header);
