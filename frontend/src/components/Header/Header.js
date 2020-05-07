import React from 'react';
import Navbar from './Navbar/Navbar';
import Showcase from './Showcase/Showcase';
class Header extends React.Component {
  render() {
    return (
      <header id="main-header">
        <Navbar />
        <Showcase />
      </header>
    );
  }
}
export default Header;
