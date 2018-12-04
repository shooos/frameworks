import 'common/less/join.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import USER from 'common/constants/USER.json';
import MESSAGES from 'common/constants/MESSAGES.json';
import * as ActionCreators from '../actionCreators';

class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: 'open',
      isOpen: false,
    };
  }

  componentWillMount = () => {
    this.items = Object.keys(USER);
  };

  componentDidUpdate = () => {
    this.form = document.forms['user-info'];
  };

  buttonChange = (e) => {
    if (e.currentTarget !== e.target) return;
    if (this.state.isOpen) {
      this.setState({button: 'register'});
    }
  };

  open = () => {
    this.setState({isOpen: true});
  };

  close = () => {
    this.setState({
      isOpen: false,
      button: 'open',
    });
  };

  validate = (key, e) => {
    if (key === 'id') {
      if (this.props.state.users.list.some((user) => user.id === e.target.value)) {
        this.form[key].setCustomValidity(MESSAGES.DUPLICATED_ID);
      } else {
        this.form[key].setCustomValidity('');
      }
    }
  };

  register = (e) => {
    if (this.form.reportValidity()) {
      const userInfo = {};
      this.items.forEach((item) => {
        userInfo[item] = this.form[item].value;
      });

      this.props.dispatch(ActionCreators.appendUser(userInfo));
      this.close();
    }
  };

  render() {
    const UserForm = () => {
      return (
        <form name="user-info" onSubmit={(e) => (e.stopPropagation(), e.preventDefault())}>
          {this.items.map((item) => {
            const validationAttrs = {};
            USER[item].require && (validationAttrs.required = 'required');

            return (
              <div className="items" key={item}>
                {USER[item].require && <span className="require">*</span>}
                <label>{USER[item].label}</label>
                <input onInput={(e) => this.validate(item, e)} name={item} {...validationAttrs} />
              </div>
            );
          })}
        </form>
      );
    };

    const joinClasses = classnames({
      join: true,
      open: this.state.isOpen,
    });

    return (
      <div className={joinClasses} onTransitionEnd={this.buttonChange}>
        <UserForm />
        {this.state.button === 'open' && <div className="btn-join" onMouseDown={this.open} />}
        {this.state.button === 'register' && (
          <div className="btn-register">
            <span className="cancel" onMouseDown={this.close} />
            <span className="register" onClick={this.register} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(Join);
