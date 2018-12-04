import 'common/less/card.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import USER from 'common/constants/USER.json';
import LABELS from 'common/constants/LABELS.json';
import * as ActionCreators from '../actionCreators';

class Card extends Component {
  constructor(props) {
    super(props);

    this.items = Object.keys(USER);
  }

  removeUser = (id) => {
    this.props.dispatch(ActionCreators.removeUser(id));
  };

  render() {
    const {user} = this.props;

    return (
      <div>
        {this.items.map((item) => {
          return (
            <p key={item} className={item}>
              {item !== 'gender' && item !== 'authority' && user[item]}
              {item === 'gender' && <span className={user[item]} />}
              {item === 'authority' && <span className={user[item]} />}
            </p>
          );
        })}
        <span className="remove" title={LABELS.REMOVE_USER} onClick={() => this.removeUser(user.id)} />
      </div>
    );
  }
}

class Sorter extends Component {
  constructor(props) {
    super(props);

    this.items = Object.keys(USER);
    this.state = {indicator: false};
  }

  execSort = (key) => {
    this.setState({indicator: true});

    process.nextTick(() => {
      this.props.dispatch(ActionCreators.sortUsers(key));
      this.setState({indicator: false});
    });
  };

  render() {
    const {sort} = this.props;
    const sortIconClasses = classnames({
      icon: true,
      [sort.order]: true,
    });

    return (
      <>
        <div className="sorter">
          {this.items.map((item) => {
            const itemClasses = classnames({
              sorted: sort.key === item,
            });

            return (
              <span key={item} className={itemClasses} onClick={() => this.execSort(item)}>
                {item === sort.key && <span className={sortIconClasses} />}
                {USER[item].label}
              </span>
            );
          })}
        </div>
        {this.state.indicator && <div className="indicator" />}
      </>
    );
  }
}

class CardList extends Component {
  render() {
    const styles = {...this.props.styles, position: 'relative'};
    const {
      state: {
        users: {sort, list},
      },
      dispatch,
    } = this.props;

    return (
      <div style={styles}>
        <div className="card-container">
          {list.map((user) => (
            <Card user={user} dispatch={dispatch} key={user.id} />
          ))}
          {Array(6).map((e, i) => (
            <div className="ghost" key={i} />
          ))}
        </div>
        <Sorter sort={sort} dispatch={dispatch} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(CardList);
