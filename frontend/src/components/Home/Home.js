import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Tours from '../../containers/Tours/Tours';
import Tourdetail from '../../containers/Tourdetail/Tourdetail';
import Auth from '../../containers/Auth/Auth';
import Logout from '../../containers/Auth/Logout/Logout';
import NotFound from '../Notfound/Notfound';
import { Switch, Route } from 'react-router-dom';

// redux auth
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/auth/actions';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/tour/:id" component={Tourdetail} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={Tours} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}
const stateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    checkAuthStatus: dispatch(authActions.authCheckState()),
  };
};
export default connect(stateToProps, dispatchToProps)(Home);
