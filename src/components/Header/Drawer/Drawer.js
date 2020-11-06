import React from 'react';
import { Link } from 'react-router-dom';

import {
  Drawer,
  Divider,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

import {
  FitnessCenter,
  AddSharp,
  AccountCircleSharp,
  InfoSharp,
  Home,
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawerTitle: {
    textAlign: 'center',
    padding: 10,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const CustomDrawer = ({ handleOpenDrawer, openDrawer }) => {
  const classes = useStyles();

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
    <React.Fragment key="top">
      <Drawer anchor={'left'} open={openDrawer} onClose={handleOpenDrawer}>
        <Typography className={classes.drawerTitle} variant="h5">
          Menu
        </Typography>

        <Divider />
        {listItems.map(item => (
          <Link to={item.pathTo} className={classes.link} key={item.title}>
            <ListItem
              onClick={handleOpenDrawer}
              className={classes.list}
              button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            <Divider />
          </Link>
        ))}
      </Drawer>
    </React.Fragment>
  );
};

export default CustomDrawer;
