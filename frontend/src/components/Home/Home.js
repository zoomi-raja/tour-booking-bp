import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Tours from '../../containers/Tours/Tours';
import Tourdetail from '../../containers/Tourdetail/Tourdetail';
import Auth from '../../containers/Auth/Auth';
import NotFound from '../Notfound/Notfound';
import { Switch, Route } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/tour/:id" component={Tourdetail} />
          <Route path="/auth" component={Auth} />
          <Route exact path="/" component={Tours} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default Home;
