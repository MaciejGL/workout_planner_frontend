import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { ListItem, ListItemText } from '@material-ui/core';

import {
  FitnessCenter,
  AddSharp,
  AccountCircleSharp,
  InfoSharp,
  Home,
} from '@material-ui/icons';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Drawer from './Drawer/Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  menuButton: {
    padding: 15,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleOpenDrawer = () => setOpenDrawer(!openDrawer);

  const matches = useMediaQuery('(min-width:600px)');

  const listItems = [
    {
      title: 'Home',
      icon: <Home />,
      pathTo: '/',
    },
    {
      title: 'Your Plans',
      icon: <FitnessCenter />,
      pathTo: '/plans',
    },
    {
      title: 'Create New Plan',
      icon: <AddSharp />,
      pathTo: '/createplan',
    },
    {
      title: 'Account',
      icon: <AccountCircleSharp />,
      pathTo: '/account',
    },
    {
      title: 'About App',
      icon: <InfoSharp />,
      pathTo: '/about',
    },
  ];

  return (
    <AppBar color="primary" position="static">
      {!matches && (
        <Toolbar className={classes.root}>
          <IconButton
            edge="end"
            onClick={handleOpenDrawer}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer handleOpenDrawer={handleOpenDrawer} openDrawer={openDrawer} />
        </Toolbar>
      )}
      {matches && (
        <Toolbar className={classes.root}>
          {listItems.map(item => (
            <NavLink
              exact
              to={item.pathTo}
              activeStyle={{ color: 'orange' }}
              className={classes.link}
              key={item.title}>
              <ListItem
                onClick={handleOpenDrawer}
                className={classes.list}
                button>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
          ))}
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
