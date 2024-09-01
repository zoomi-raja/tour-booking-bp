import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const layout = (props) => {
  return (
    <>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </>
  );
};
export default layout;
