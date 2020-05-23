import React from 'react';
import classes from './Sidebar.module.scss';
import Toggler from '../Toggler/Toggler';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Drawer from '../Drawer/Drawer';
// redux
import { connect } from 'react-redux';

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <Toggler
        toggleDrawer={props.toggleDrawer}
        value={props.displayBackdrop}
      />
      <Backdrop show={props.displayBackdrop} clicked={props.closeBackdrop} />
      <Drawer {...props} clicked={props.closeBackdrop} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(Sidebar);
