import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Tours from '../../components/Tours/Tours';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Tours />
      </Layout>
    );
  }
}

export default Home;
