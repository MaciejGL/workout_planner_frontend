import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import workout1 from '../../assets/workout1.png';
import workout2 from '../../assets/workout2.jpg';
import workout3 from '../../assets/workout3.png';
import workout4 from '../../assets/workout4.png';

import { UserContext } from '../../store/store';
import styles from './Plans.module.css';
import Card from './Card/Card';

const useStyles = makeStyles({
  subtitle: {
    width: '100%',
    maxWidth: '600px',
    padding: '0 0 20px 20px',
    opacity: 0.6,
  },
  title: {
    maxWidth: '600px',
    width: '100%',
    padding: '20px 0 0 20px',
  },
});

const Plans = () => {
  const classes = useStyles();
  const { state } = useContext(UserContext);
  const [plans, setPlans] = useState(null);
  useEffect(() => {
    setPlans(state);
  }, [state]);
  const images = [workout1, workout2, workout3, workout4];
  return (
    <div className={styles.container}>
      <Typography className={classes.title} variant="h5">
        Your Plans
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle2">
        Choose one and smash!
      </Typography>
      {plans &&
        plans.map((plan, i) => (
          <Link to={`/plans/${plan._id}`} key={plan._id}>
            <Card
              key={plan._id}
              days={plan.days.length}
              title={plan.name}
              imageUrl={images[Math.floor(Math.random() * images.length)]}
            />
          </Link>
        ))}
    </div>
  );
};

export default Plans;
