import React from 'react';

import { Drawer, Divider, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import {
  FitnessCenter,
  AddSharp,
  AccountCircleSharp,
  InfoSharp,
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
});

const CustomDrawer = ({ handleOpenDrawer, openDrawer }) => {
  const classes = useStyles();

  const listItems = [
    {
      title: 'Workouts',
      icon: <FitnessCenter />,
    },
    {
      title: 'Create New',
      icon: <AddSharp />,
    },
    {
      title: 'Account',
      icon: <AccountCircleSharp />,
    },
    {
      title: 'About',
      icon: <InfoSharp />,
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
          <>
            <ListItem
              onClick={handleOpenDrawer}
              className={classes.list}
              button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            <Divider />
          </>
        ))}
      </Drawer>
    </React.Fragment>
  );
};

export default CustomDrawer;
