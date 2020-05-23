import React from 'react';
import Aux from '../Aux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const layout = (props) => {
  return (
    <Aux>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </Aux>
  );
};
export default layout;
