import React from 'react';
import classes from './Auth.module.scss';
import Login from '../../components/form/auth/Login';
import Signup from '../../components/form/auth/signup';
class Auth extends React.Component {
  state = {
    isLogin: true,
  };
  componentDidMount() {
    if (/signup/.test(this.props.history.location.pathname)) {
      this.setState({ isLogin: false });
    }
  }
  componentWillUpdate() {
    if (
      this.state.isLogin &&
      /signup/.test(this.props.history.location.pathname)
    ) {
      this.setState({ isLogin: false });
    } else if (
      !this.state.isLogin &&
      /login/.test(this.props.history.location.pathname)
    ) {
      this.setState({ isLogin: true });
    }
  }
  render() {
    let html;
    if (this.state.isLogin) {
      html = <Login />;
    } else {
      html = <Signup />;
    }
    return (
      <div className={classes.remainingHeight}>
        <div className={['container', classes.container].join(' ')}>{html}</div>
      </div>
    );
  }
}
export default Auth;
