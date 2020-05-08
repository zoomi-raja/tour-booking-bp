import React from 'react';
import Navbar from './Navbar/Navbar';
class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="main-header">
          <Navbar />
        </header>
      </div>
    );
  }
}
export default Header;
