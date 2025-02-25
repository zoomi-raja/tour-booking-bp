import React from 'react';
import Logo from '../../components/Logo/Logo';
import Search from '../../containers/Search/Search';
import Navigation from '../../components/Header/Navbar/Navigation/Navigation';
import Sidebar from '../../components/Header/Navbar/Sidebar/Sidebar';
import classes from './Navbar.module.scss';
class navbar extends React.Component {
  state = {
    open: false,
  };
  toggleDrawer = (event) => {
    this.setState({ open: event.target.checked });
  };
  closeBackdrop = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className={classes.navbar}>
        <div className="container">
          <div className={classes.navbar_holder}>
            <Sidebar
              toggleDrawer={this.toggleDrawer}
              displayBackdrop={this.state.open}
              closeBackdrop={this.closeBackdrop}
            />
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
