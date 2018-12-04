import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch} from 'react-router-dom';
import ReactHeader from '../components/Header';
import ReactTable from '../components/Table';
import ReactCard from '../components/Card';
import * as ActionCreators from '../actionCreators';

const headerStyles = {
  minHeight: '60px',
  flexBasis: '60px',
};

const contentStyles = {
  flex: '1 1 auto',
  padding: '40px 30px',
  overflowX: 'hidden',
  overflowY: 'auto',
};

class Root extends Component {
  componentWillMount() {
    this.props.dispatch(ActionCreators.getUsers());
  }

  render() {
    return (
      <div className="page">
        <ReactHeader styles={headerStyles} />
        <Switch>
          <Route path="/table" render={() => <ReactTable styles={contentStyles} />} />
          <Route path="/card" render={() => <ReactCard styles={contentStyles} />} />
          <Redirect from="/" to="/table" exact />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(Root);
