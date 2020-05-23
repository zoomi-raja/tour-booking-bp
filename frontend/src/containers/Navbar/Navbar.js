import React from 'react';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import Navigation from '../../components/Header/Navbar/Navigation/Navigation';
import Sidebar from '../../components/Header/Navbar/Sidebar/Sidebar';
import classes from './Navbar.module.scss';
class navbar extends React.Component {
  render() {
    return (
      <div className={classes.navbar}>
        <div className="container">
          <div className={classes.navbar_holder}>
            <Sidebar />
            <Logo />
            <Search />
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}
export default navbar;
