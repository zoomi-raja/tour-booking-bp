import React, { Suspense } from 'react';
import Layout from '../../hoc/Layout/Layout';
import Tours from '../../containers/Tours/Tours';
import Auth from '../../containers/Auth/Auth';
import Logout from '../../containers/Auth/Logout/Logout';
import Payment from '../Payment/Payment';
import User from '../../containers/User/User';
import SearchResults from '../SearchResults/SearchResults';
import NotFound from '../Notfound/Notfound';
import { Switch, Route } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';

// redux auth
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/auth/actions';

// tour detail has stripe lets lazyload
const Tourdetail = React.lazy(() =>
  import('../../containers/Tourdetail/Tourdetail')
);

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              path="/tour/:id"
              component={(props) => (
                <Tourdetail {...props} key={window.location.pathname} />
              )}
            />
            <Route path="/search" component={SearchResults} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/payment/:sessionID" component={Payment} />
            <Route path="/user" component={User} />
            <Route path="/" exact component={Tours} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
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
