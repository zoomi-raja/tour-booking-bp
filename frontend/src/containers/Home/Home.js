import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Tours from '../../components/Tours/Tours';
import NotFound from '../../components/Notfound/Notfound';
import Tourdetail from '../../containers/Tourdetail/Tourdetail';
import { Switch, Route } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/tour/:id" component={Tourdetail} />
          <Route exact path="/" component={Tours} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default Home;
