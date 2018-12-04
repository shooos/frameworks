import 'common/less/table.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import USER from 'common/constants/USER.json';
import LABELS from 'common/constants/LABELS.json';
import * as ActionCreators from '../actionCreators';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicator: false,
    };
  }

  removeUser = (id) => {
    this.props.dispatch(ActionCreators.removeUser(id));
  };

  execSort = (key) => {
    this.setState({indicator: true});

    process.nextTick(() => {
      this.props.dispatch(ActionCreators.sortUsers(key));
      this.setState({indicator: false});
    });
  };

  render() {
    const {list, sort} = this.props.state.users;
    const items = Object.keys(USER);

    const Hedaers = () =>
      items.map((item) => {
        const sorterClasses = classnames({
          sort: true,
          hidden: sort.key !== item,
          asc: sort.order === 'asc',
          desc: sort.order === 'desc',
        });

        return (
          <th key={item} onClick={() => this.execSort(item)}>
            {USER[item].label}
            <span className={sorterClasses} />
          </th>
        );
      });

    const Rows = () =>
      list.map((user) => {
        const Columns = () =>
          items.map((item) => {
            return <td key={`${user.id}-${item}`}>{user[item]}</td>;
          });

        return (
          <tr key={user.id}>
            <Columns />
            <td className="remove">
              <span title={LABELS.REMOVE_USER} onClick={() => this.removeUser(user.id)} />
            </td>
          </tr>
        );
      });

    return (
      <div style={this.props.styles}>
        <table className="users-table">
          <thead>
            <tr>
              <Hedaers />
              <th>{LABELS.REMOVE_USER}</th>
            </tr>
          </thead>
          <tbody>
            <Rows />
          </tbody>
        </table>
        {this.state.indicator && <div className="indicator" />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(Table);
