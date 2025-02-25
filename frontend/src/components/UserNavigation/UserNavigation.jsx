import React from 'react';
import classes from './UserNavigation.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
const nav = [
  {
    text: 'my account',
    link: 'account',
  },
  {
    text: 'my tours',
    link: 'tours',
  },
  {
    text: 'logout',
    link: '/logout',
  },
];

const navItems = nav.map((item, index) => {
  return <NavigationItem key={index} link={item.link} text={item.text} />;
});
const UserNavigation = (props) => {
  return <ul className={classes.navigation}>{navItems}</ul>;
};
export default UserNavigation;
