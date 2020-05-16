import React from 'react';
import classes from './Auth.module.scss';
import Login from '../../components/form/auth/Login';
import Signup from '../../components/form/auth/signup';
import checkValidity from '../../utils/InputValidity';
class Auth extends React.Component {
  state = {
    isLogin: true,
    fields: {
      email: {
        forLogin: true,
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        isValid: false,
        touched: false,
      },
      password: {
        forLogin: true,
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        isValid: false,
        touched: false,
      },
    },
  };
  componentDidMount() {
    document.getElementById('root').setAttribute('style', 'height:100vh;');
    if (/signup/.test(this.props.history.location.pathname)) {
      this.setState({ isLogin: false });
    }
  }
  componentWillUnmount() {
    document.getElementById('root').setAttribute('style', '');
  }
  shouldComponentUpdate() {
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
    return true;
  }
  onFieldChange = (fieldEvent) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [fieldEvent.target.name]: {
          ...this.state.fields[fieldEvent.target.name],
          value: fieldEvent.target.value,
          isValid: checkValidity(
            fieldEvent.target.value,
            this.state.fields[fieldEvent.target.name].validation
          ),
          touched: true,
        },
      },
    });
  };
  render() {
    let html;
    if (this.state.isLogin) {
      html = (
        <Login onFieldChange={this.onFieldChange} fields={this.state.fields} />
      );
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
