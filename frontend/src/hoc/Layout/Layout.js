import React, { Component } from 'react';
import Aux from '../Aux';
import Header from '../../components/Header/Header';
class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <div>drawer for mobile</div>
        <div>{this.props.children}</div>
        <div>footer</div>
      </Aux>
    );
  }
}
export default Layout;
