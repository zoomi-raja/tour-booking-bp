import React, { Suspense } from 'react';
import Spinner from '../UI/Spinner/Spinner';
import Layout from '../../hoc/Layout/Layout';
import Tours from '../../containers/Tours/Tours';
import Auth from '../../containers/Auth/Auth';
import Logout from '../../containers/Auth/Logout/Logout';
import Payment from '../Payment/Payment';
import User from '../../containers/User/User';
import SearchResults from '../SearchResults/SearchResults';
import NotFound from '../Notfound/Notfound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// redux auth
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/auth/actions';
import Tourdetail from '../../containers/Tourdetail/Tourdetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Tours />},
      { path: 'search', element: <SearchResults />},
      { path: 'auth/*', element: <Auth />},
      { path: 'logout', element: <Logout />},
      { path: 'payment/:sessionID', element: <Payment />},
      { path: 'user', element: <User />},
      { path: '/tour/:id', element: <Tourdetail />}
    ]
  }
]);

class Home extends React.Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
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

