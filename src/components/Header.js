import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
  return (
    <AppBar color="primary" position="static">
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
    </AppBar>
  );
};

export default Header;
